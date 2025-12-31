import { useState } from "react";
import Button from '../../../shared/components/button/Button';
import {  useBookDetail, useUpsertBookDeatail } from "../api/useBookDetail";
import { useParams } from "react-router";

interface Props {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function WriteQuotes({ setIsClick }: Props) {
  const { id, book_id } = useParams();
  const {data} = useBookDetail(id??'',book_id??'')
  const { mutate } = useUpsertBookDeatail();

  const [quote,setQuote] = useState('')
  const [pageNum,setPageNum] = useState('')


  const handleCancle = () => {
    setIsClick(false);
  };

  const handleSave = async() => {
    const updatedQuotes = quote.trim() ?
      [...(data?.quote || []), quote.trim()] : data?.quote;
    const updatedPageNum = pageNum.trim() ? 
      [...(data?.page_number || []), pageNum.trim()] : data?.page_number
    
    mutate({
      user_id: id??'',
      book_id: book_id ?? '',
      quote: updatedQuotes,
      page_number: updatedPageNum,
    }, {
      onSuccess: () => { setIsClick(false) }
    });
  }

  return (
    <>
      <section>
        <h1>문장</h1>
        <label htmlFor="quote" className="sr-only">
          책 속에서 간직하고싶은 문장을 기록해보세요
        </label>
        <textarea
          name="bookQuote"
          id="quote"
          rows={5}
          placeholder="기억하고 싶은 문장을 입력하세요"
          className="border border-border rounded-lg p-2 w-full bg-secondBg "
          onChange={(e) => setQuote(e.target.value)}
        ></textarea>
      </section>
      <section>
        <h2>페이지(선택)</h2>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="border border-border w-10 p-1 text-right rounded-sm"
            onChange={(e) => setPageNum(e.target.value)}
          />
          <p>페이지</p>
        </div>
      </section>
      <section className="flex gap-3 mt-5">
        <Button variant="primary" onClick={handleCancle}>
          취소
        </Button>
        <Button variant="primary" onClick={handleSave}>
          등록
        </Button>
      </section>
    </>
  );
}
export default WriteQuotes