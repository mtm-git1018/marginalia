import Button from "../../../shared/components/Button"

function WriteQuotes() {
  return (
    <>
      <section>
        <h1>문장</h1>
        <textarea
          name=""
          id=""
          rows={5}
          placeholder="기억하고 싶은 문장을 입력하세요"
          className="border border-border rounded-lg p-2 w-full bg-secondBg "
        ></textarea>
      </section>
      <section>
        <h2>페이지(선택)</h2>
        <div className="flex gap-2 items-center">
          <input type="text" className="border border-border w-10 p-1 text-right rounded-sm" />
          <p>페이지</p>
        </div>
      </section>
      <section className="flex gap-3 mt-5">
        <Button amount="two">취소</Button>
        <Button amount="two">등록</Button>
      </section>
    </>
  );
}
export default WriteQuotes