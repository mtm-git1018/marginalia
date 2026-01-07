

interface Props {
  targetMinutes:number
  setTargetMinutes: (minutes: number) => void;
}

function TimeSetting({ targetMinutes,setTargetMinutes }:Props) {
 
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {[0.1,15, 25, 30, 45, 60].map((min) => (
        <button
          key={min}
          onClick={() => setTargetMinutes(min)}
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
  );
}
export default TimeSetting