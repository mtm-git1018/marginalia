import { IoPause, IoPlay, IoRefresh } from "react-icons/io5";

interface Props{
  isActive: boolean;
  onToggle: () => void
  resetTimer:() =>void
}

function TimerControlButton({ isActive,onToggle,resetTimer}:Props) {
  return (
    <div className="flex items-center gap-4">
      {/* 초기화 */}
      <button className="p-4 bg-background hover:bg-border rounded-full transition-colors"
      onClick={resetTimer}
      >
        <IoRefresh className="text-xl text-text" />
      </button>

      {/* 시작/정지 */}
      <button
        className="p-6 bg-sageGreen hover:bg-sageGreen/90 rounded-full transition-colors shadow-lg hover:shadow-xl"
        onClick={onToggle}
      >
        {isActive ? (
          <IoPause className="text-xl text-white" />
        ) : (
          <IoPlay className="text-xl text-white" />
        )}
      </button>
    </div>
  );
}
export default TimerControlButton