import { useCallback, useEffect, useRef, useState } from "react"

function useTimer(initMinute=25) {

  const [targetMinutes, setTargetMinutes] = useState(initMinute)
  const [totalSeconds,setTotalSeconds] = useState(initMinute * 60)
  const [isActive,setIsActive] = useState(false)
  const [startTime,setStartTime] = useState<Date|null>(null)
  const intervalRef = useRef<number | null>(null) 


    const handleTimerComplete = useCallback(() => {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('독서 타이머 완료', {
          body: `${targetMinutes}분 독서를 완료하였습니다.`,
        });
      }
    }, [targetMinutes]);
  
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
  


  const startTimer = useCallback(() => {
    setIsActive(true)
    if (!startTime) {
      setStartTime(new Date())
    }
  }, [startTime])
  
  const pauseTimer = useCallback(() => {
    setIsActive(false)
  }, [])
  
  const resetTimer = useCallback(() => {
    setIsActive(false)
    setTotalSeconds(targetMinutes * 60)
    setStartTime(null)
  },[targetMinutes])

  const updateTargetMinutes = useCallback((minutes: number) => {
    setTargetMinutes(minutes)
    setTotalSeconds(minutes * 60)
    setIsActive(false)
    setStartTime(null)
  },[])

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
    startTimer,
    pauseTimer,
    resetTimer,
    setTargetMinutes: updateTargetMinutes,
    targetMinutes,
  };
}
export default useTimer