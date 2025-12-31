import { MdOutlineBookmarkBorder } from "react-icons/md";
import Button from '../../../shared/components/button/Button';
import { useState } from "react";
import WriteQuotes from "./WriteQuotes";
import { useParams } from "react-router";
import { useBookDetail } from "../api/useBookDetail";


function BookQuotes() {
  const { id,book_id} = useParams()
  const [isClick,setIsClick] = useState(false)
  const {data} = useBookDetail(id ?? '',book_id ?? '')
 
  if (isClick) {
    return (
      <WriteQuotes setIsClick={setIsClick} />
    )
  }

  if (data) {
    return(
    <ul className="flex flex-col gap-3">
        {data.quote?.map((quote,index) => (
          <li className="border border-softTan rounded-lg min-h-15 p-2" key={ index }>
        "{quote}"
        <p className="text-xs text-dustyBrown pt-3">{ data.page_number && `p.${data.page_number}`}</p>
        </li>
      ))}
      </ul>
    )
  } else {

    return (
      <div className="flex-col flex-center gap-3 mt-10">
        <div className="w-20 h-20 rounded-full relative bg-lightSand flex-center">
          <MdOutlineBookmarkBorder size={40} />
        </div>
        <h2 className="text-2xl font-semibold">저장된 문장이 없아요</h2>
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