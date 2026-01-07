import TimerHeader from "./components/TimerHeader";
import TimerProgress from "./components/TimerProgress";
import TimerStatic from "./components/TimerStatic";
import TimerControlButton from "./components/TimerControlButton";
import TimeSetting from "./components/TimeSetting";
import useTimer from "./hooks/useTimer";


function Timer() {

  const {

    timeString,
    isActive,
    progress,
    targetMinutes,
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
    <section className="mt-10 bg-white rounded-lg p-8">
      <TimerHeader />

      <section className="flex flex-col items-center gap-6">
        <TimerProgress progress={progress} isActive={isActive} timeString={timeString} />
        <TimerControlButton isActive={isActive} onToggle={handleToggle} resetTimer={resetTimer} />
        <TimeSetting targetMinutes={targetMinutes} setTargetMinutes={setTargetMinutes} />
        <TimerStatic />
      </section>
    </section>
  );
}
export default Timer