function TimerStatic() {
  return (
    <div className="w-full grid grid-cols-3 gap-4 mt-4">
      <div className="text-center p-3 bg-background rounded-lg">
        <p className="text-2xl font-bold text-sageGreen">0분</p>
        <p className="text-xs text-text/60 mt-1">오늘</p>
      </div>
      <div className="text-center p-3 bg-background rounded-lg">
        <p className="text-2xl font-bold text-sageGreen">0분</p>
        <p className="text-xs text-text/60 mt-1">이번 주</p>
      </div>
      <div className="text-center p-3 bg-background rounded-lg">
        <p className="text-2xl font-bold text-sageGreen">0시간</p>
        <p className="text-xs text-text/60 mt-1">이번 달 총 독서 시간</p>
      </div>
    </div>
  );
}
export default TimerStatic