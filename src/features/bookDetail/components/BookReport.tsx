import { HiOutlinePencil } from "react-icons/hi2";
import Button from '../../../shared/components/button/Button';

import { useState } from "react";
import WriteReview from "./WriteReview";
import { useBookDetail } from "../api/useBookDetail";
import { useParams } from "react-router";
import StarRating from "../../../shared/components/star/starRating";

function BookReport() {
  const { id,book_id} = useParams()
  const [isClick,setIsClick] = useState(false)
  const {data} = useBookDetail(id ?? '',book_id ?? '')
  
  if (isClick) {
    return(
    <div>
        <WriteReview setIsClick={setIsClick} />
    </div>
    )
  }

  if (data?.review) {
    return (
      <>
          <div key={data.detail_id}>
            <div className="flex gap-2 items-center text-dustyBrown">
              <StarRating rate={data.rate} />
              <p className="text-xs">({data.rate} / 5)</p>
            </div>
            <div className="mt-2">{data.review}</div>
            <p className="text-xs text-right text-dustyBrown">{new Date(data.created_at).toLocaleDateString()}</p>
          </div>
      </>
    );


  } else {
    return (
      <>
        <div className="flex-center flex-col gap-3 mt-10">
          <div className="w-20 h-20 rounded-full relative bg-lightSand flex-center">
            <HiOutlinePencil size={40} />
          </div>
          <h2 className="text-2xl font-semibold">아직 작성된 독후감이 없어요.</h2>
          <p className="text-sm text-gray-400 text-center">
            책을 읽고 난 후의 생각과 느낌을 <br /> 자유롭게 기록해보세요.
          </p>
          <Button amount="one" onClick={() => setIsClick(true)}>독후감 작성하기</Button>
        </div>
      </>
    );
  }
}
export default BookReport