import { MdOutlineBookmarkBorder } from "react-icons/md";
import Button from '@/shared/components/button/Button';
import { useState } from "react";
import { useParams } from "react-router";
import { useBookDetail } from "../../api/useBookDetail";
import WriteQuotes from "./WriteQuotes";
import Quotes from "./Quotes";


function BookQuotes() {
  const { id,book_id } = useParams()
  const [isClick,setIsClick] = useState(false)
  const [editIndex,setEditIndex] = useState<number|undefined>(undefined)
  const { data } = useBookDetail(id ?? '',book_id ?? '')
  
   const handleEdit = (index:number) => {
    setEditIndex(index)
     setIsClick(true);
   };


  if (isClick) {
    return (
      <WriteQuotes editIndex={ editIndex } setIsClick={setIsClick} />
    )
  }

  if (data?.quote) {
    return (
      <Quotes data={data} onClick={setIsClick} handleEdit={ handleEdit} />
    );
  }
  else {
    return (
      <div className="flex-col flex-center gap-3 mt-10">
        <div className="w-20 h-20 rounded-full relative bg-lightSand flex-center">
          <MdOutlineBookmarkBorder size={40} />
        </div>
        <h1 className="text-2xl font-semibold">저장된 문장이 없아요</h1>
        <p className="text-sm text-gray-400 text-center">
          마음에 드는 문장이나 <br /> 기억하고 싶은 구절을 저장해보세요
        </p>
        <Button variant="primary" onClick={() => setIsClick(true)}>
          문장 추가하기
        </Button>
      </div>
    )
  }
}
export default BookQuotes