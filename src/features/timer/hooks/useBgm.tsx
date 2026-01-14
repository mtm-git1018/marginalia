import { useEffect, useRef } from "react"
import bgmConverter from "../utill/bgmConverter"

function useBGM(bgm:string, isActive:boolean) {
  const bgmRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (bgmRef.current) {
      bgmRef.current.pause()
      bgmRef.current = null
    }

    if (bgm) {
      const bgmSrc = bgmConverter(bgm);

      if (bgmSrc) {
        const audio = new Audio(bgmSrc)
        audio.loop = true;
        bgmRef.current = audio

        if (isActive) {
          audio.play().catch((error) => {
            console.error('BGM 실행 에러',error)
          })
        }
      }

      return () => {
        if (bgmRef.current) {
          bgmRef.current.pause()
        }
      }
    }
  }, [bgm,isActive])
  
  useEffect(() => {
    if (bgmRef.current) {
      if (isActive) {
        bgmRef.current.play().catch((error) => {
          console.error('BGM 재생 에러', error)
        })
      } else {
        bgmRef.current.pause()
      }
    }
  }, [isActive])
  
  const stopBgm = () => {
    if (bgmRef.current) {
      bgmRef.current.pause();
      bgmRef.current.currentTime = 0
    }
  }

  return {stopBgm}
}
export default useBGM