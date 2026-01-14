
interface Props{
  onChoice:(sound:string)=>void
}

function TimerBackgroundSound({ onChoice}:Props) {

  return (
    <section className="w-full flex-center flex-col gap-1">
      <h1>화이트 노이즈</h1>
      <select id="bgm" className="border rounded-sm border-lightSand px-4 py-1"
        onChange={(e) => onChoice(e.target.value)}
      >
        <option value="">없음</option>
        <option value="rain">비오는 날</option>
        <option value="ocean">파도</option>
        <option value="fire">모닥불</option>
        <option value="forrest">숲 속</option>
        <option value="cafe">카페</option>
      </select>
    </section>
  );
}
export default TimerBackgroundSound