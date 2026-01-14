import TimerHeader from "./components/TimerHeader";
import TimerProgress from "./components/TimerProgress";
import TimerStatic from "./components/TimerStatic";
import TimerControlButton from "./components/TimerControlButton";
import TimeSetting from "./components/TimeSetting";
import useTimer from "./hooks/useTimer";
import SEO from "@/shared/components/seo/SEO";
import TimerBackgroundSound from "./components/TimerBackgroundSound";

function Timer() {

  const {
    timeString,
    isActive,
    progress,
    targetMinutes,
    handleChooseBgm,
    startTimer,
    pauseTimer,
    resetTimer,
    setTargetMinutes,
  } = useTimer(25);

  const handleToggle = () => {
    if (isActive) {
      pauseTimer()
    } else {
      startTimer()
    }
  }

  return (
    <>
      <SEO
        title="타이머"
        description="독서 습관을 들이기 위해 타이머를 이용해보세요."
        keywords="독서, 독서 습관, 독서 타이머"
      />

      <section className="mt-10 bg-white rounded-lg p-8">
        <TimerHeader />
        <section className="flex flex-col items-center gap-6">
          <TimerProgress progress={progress} isActive={isActive} timeString={timeString} />
          <TimerControlButton isActive={isActive} onToggle={handleToggle} resetTimer={resetTimer} />
          <TimerBackgroundSound onChoice={ handleChooseBgm} />
          <TimeSetting
            isActive={isActive}
            targetMinutes={targetMinutes}
            setTargetMinutes={setTargetMinutes}
          />
          <TimerStatic />
          <p className="text-xs text-center text-dustyBrown">
            주간 독서시간은 매 주 월요일에 초기화됩니다.
          </p>
        </section>
      </section>
    </>
  );
}
export default Timer