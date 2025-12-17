import { useState } from "react";
import Button from "../../../shared/components/Button"
import { useBookDeatail } from "../api/useBookDetail";

function WriteQuotes() {
  const [quote,setQuote] =useState<string[]>([])
  const [newQuote,setNewQuote] = useState('')
  const [pageNum,setPageNum] = useState('')
  const { mutate } = useBookDeatail()

  const handleAddQuote = () => {
    if (!newQuote.trim()) return
    setQuote(prev => [...prev,newQuote])
  }

  const handleSave = () => {
    handleAddQuote()
    mutate({
      quote:quote,
      page_number:pageNum
    })
  }
  return (
    <>
      <section>
        <h1>문장</h1>
        <label htmlFor="quote" className="sr-only">책 속에서 간직하고싶은 문장을 기록해보세요</label>
        <textarea
          name="bookQuote"
          id="quote"
          rows={5}
          placeholder="기억하고 싶은 문장을 입력하세요"
          className="border border-border rounded-lg p-2 w-full bg-secondBg "
          onChange={(e) => setNewQuote(e.target.value)}
        ></textarea>
      </section>
      <section>
        <h2>페이지(선택)</h2>
        <div className="flex gap-2 items-center">
          <input type="text" className="border border-border w-10 p-1 text-right rounded-sm" onChange={(e)=>setPageNum(e.target.value)} />
          <p>페이지</p>
        </div>
      </section>
      <section className="flex gap-3 mt-5">
        <Button amount="two">취소</Button>
        <Button amount="two" onClick={handleSave}>등록</Button>
      </section>
    </>
  );
}
export default WriteQuotes