import {  useState } from "react";
import { useParams } from "react-router";
import { useBookDetail, useUpsertBookDeatail } from "../../api/useBookDetail";
import Button from "@/shared/components/button/Button";
import { sweetAlert } from "@/shared/utill/swal";

interface Props {
  editIndex?:number
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function WriteQuotes({ editIndex, setIsClick }: Props) {
  const { id, book_id } = useParams();
  const {data} = useBookDetail(id ?? '',book_id ?? '')
  const { mutate } = useUpsertBookDeatail();



  const initQuote = editIndex !== undefined && data?.quote ?
  data.quote[editIndex] : ''
  const initPageNum = editIndex !== undefined && data?.page_number ?
  data.page_number[editIndex] : ''

  const [quote, setQuote] = useState(initQuote);
  const [pageNum, setPageNum] = useState(initPageNum);

  const handleCancle = () => {
    setIsClick(false);
  };

  const handlePageNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    if (target.trim() !== '' || /^[0-9]+$/.test(pageNum)) {
      sweetAlert('페이지 번호는 숫자만 입력가능합니다.');
      return;
    }
    setPageNum(target)
  };


  const handleSave = async () => {
    const isEditMode = editIndex !== undefined
    
    let updatedQuote;
    let updatedPageNum;
    
    if (isEditMode) {
      updatedQuote = [...data?.quote || []]
      updatedQuote[editIndex] = quote.trim()
      
      updatedPageNum = [...data?.page_number || []]
      updatedPageNum[editIndex] = pageNum.trim()
    }else{
      updatedQuote = quote.trim() ? [...(data?.quote || []), quote.trim()] : data?.quote;

      updatedPageNum = pageNum.trim()
      ? [...(data?.page_number || []), pageNum.trim()]
      : data?.page_number;
    }
   
    mutate({
      user_id: id ?? '',
      book_id: book_id ?? '',
      quote: updatedQuote,
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
          value={quote}
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
            value={pageNum}
            className="border border-border w-10 p-1 text-right rounded-sm"
            onChange={(e) => handlePageNum(e)}
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