import { sweetOkay } from "@/shared/utill/swal"
import { useEffect, useRef, useState } from "react"
import { usePostTimer } from "../api/usePostTimer"
import { useAuth } from "@/shared/context/AuthContext"
import useBGM from "./useBGM"



function useTimer(initMinute = 25) {
  const [targetMinutes, setTargetMinutes] = useState(initMinute)
  const [totalSeconds, setTotalSeconds] = useState(initMinute * 60)
  const [isActive,setIsActive] = useState(false)
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [bgm, setBgm] = useState('')
  
  const intervalRef = useRef<number | null>(null) 
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const { mutate } = usePostTimer();
  const { user }= useAuth()
  const { stopBgm } = useBGM(bgm, isActive)
  
  const handleChooseBgm = (sound:string) => {
   setBgm(sound)
 }


  /* 타이머 시간 소진 시  */
  const handleTimerComplete = () => {
    stopBgm()
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error('알림음 실행 실패',error)
      })
    }

    sweetOkay(`${targetMinutes}분 독서에 성공하셨습니다.`,
      () => {
        audioRef.current?.pause()
         mutate({
           userId: user?.id ?? '',
           time: totalSeconds,
         });
      }
    )
  }

  // 컴포넌트 마운트 시 오디오파일 초기화
  useEffect(() => { 
    audioRef.current = new Audio('/sound/alarm-clock-short-6402.mp3');
    audioRef.current.load()

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])
  
  // 활성화 감지
  useEffect(() => {
    if (isActive && totalSeconds > 0) {
      intervalRef.current = window.setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            setIsActive(false)
            handleTimerComplete()
            return 0
          }
          return prev - 1 
        })
      },1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isActive, totalSeconds])
  

  const startTimer = () => {
    setIsActive(true)
    if (!startTime) {
      setStartTime(new Date())
    }
  }
  
  const pauseTimer = () => {
    setIsActive(false)
  }
  
  const resetTimer = () => {
    setIsActive(false)
    setTotalSeconds(targetMinutes * 60)
    setStartTime(null)
  }

  const updateTargetMinutes = (minutes: number) => {
    setTargetMinutes(minutes)
    setTotalSeconds(minutes * 60)
    setIsActive(false)
    setStartTime(null)
  }
  


const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
const progress = ((targetMinutes * 60 - totalSeconds) / (targetMinutes * 60)) * 100;
  
  return {
    minutes,
    seconds,
    isActive,
    progress,
    timeString,
    handleChooseBgm,
    startTimer,
    pauseTimer,
    resetTimer,
    setTargetMinutes: updateTargetMinutes,
    targetMinutes,
  };
}
export default useTimer