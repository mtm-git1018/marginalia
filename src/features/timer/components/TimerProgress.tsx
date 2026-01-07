interface Props{
  progress:number
  isActive: boolean
  timeString: string
}

function TimerProgress({ progress,isActive,timeString }:Props) {


  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative">
      <svg width="280" height="280" className="transform -rotate-90">
        {/* 배경 원 */}
        <circle cx="140" cy="140" r={radius} fill="none" stroke="#F5F1E8" strokeWidth="16" />
        {/* 프로그레스 원 */}
        <circle
          cx="140"
          cy="140"
          r={radius}
          fill="none"
          stroke="#8B9D83"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>

      {/* 중앙 시간 표시 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-6xl font-bold text-titleText tabular-nums">{timeString}</span>
        <span className="text-sm text-text/60 mt-2">
          {isActive ? '독서 중...' : '독서 시작하기'}
        </span>
      </div>
    </div>
  );
}
export default TimerProgress