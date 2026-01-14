import { sweetInfo } from "@/shared/utill/swal";
import { useState } from "react";

interface Props {
  isActive:boolean
  targetMinutes:number
  setTargetMinutes: (minutes: number) => void;
}

function TimeSetting({ isActive,targetMinutes,setTargetMinutes }:Props) {
 
  const presetMinute = [15, 25, 30, 45, 60]
  const [customInput, setCustomInput] = useState('')
  const [isCustomValue, setIsCustomValue] = useState('')
 

  const handlePresetClick = (min: number) => {
    if (isActive) return

    setTargetMinutes(min)
    setIsCustomValue('')
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value

    if (target && !/^\d+$/.test(target)) {
      sweetInfo('직접 입력은 숫자만 입력 가능합니다.')
      return
    }
    setCustomInput(target);
  };

  const handleCustomSubmit = () => {
    
    const minute = parseInt(customInput,10)

    if (minute < 1) {
      sweetInfo('최소 1분 이상 입력해주세요!')
      return
    }

    setTargetMinutes(minute)
    setCustomInput('')
  }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleCustomSubmit();
      }
    };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 flex-wrap justify-center">
        {presetMinute.map((min) => (
          <button
            key={min}
            onClick={() => handlePresetClick(min)}
            disabled={isActive}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              targetMinutes === min
                ? 'bg-sageGreen text-white'
                : 'bg-background hover:bg-sageGreen/10 text-text'
            }`}
          >
            {min}분
          </button>
        ))}
      </div>

      <div className="flex-center flex-col gap-2">
        <label htmlFor="custom-time" className="text-sm text-warmBrown/70">
          직접입력
        </label>
        <div className="flex gap-2 items-start">
          <input
            id="custom-time"
            type="text"
            onChange={(e) => handleInput(e)}
            onKeyPress={handleKeyPress}
            inputMode="numeric"
            value={customInput}
            disabled={isActive}
            placeholder='예: 40'
            className={`flex-1 px-4 py-2 rounded-lg border-2 text-center transition-colors 
             ${isActive ? 'bg-background/50 cursor-not-allowed' : 'bg-white'}
              outline-none text-warmBrown placeholder:text-warmBrown/40`}
          />

          <button
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isActive
                ? 'bg-background text-text/40 cursor-not-allowed'
                : 'bg-sageGreen text-white hover:bg-sageGreen/90'
            }`}
            onClick={handleCustomSubmit}
          >
            설정
          </button>
        </div>

        {/* 현재 설정값 표시 (커스텀일 때) */}
        {isCustomValue && (
          <p className="text-xs text-sageGreen text-center">✓ 현재 {targetMinutes}분으로 설정됨</p>
        )}
      </div>
    </div>
  );
}
export default TimeSetting

