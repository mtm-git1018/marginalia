import { HiOutlinePencil } from "react-icons/hi2";
import Button from "../../../shared/components/Button"
import { useState } from "react";
import WriteReview from "./WriteReview";

function BookReport() {
const [isClick,setIsClick] = useState(false)

  
  if (isClick) {
    return(
    <div>
        <WriteReview setIsClick={setIsClick } />
    </div>
    )
  }
  
  return (
    <>
      <div className="flex-center flex-col gap-3">
        <div className="w-20 h-20 rounded-full relative bg-lightSand flex-center">
          <HiOutlinePencil size={40} />
        </div>
        <h2 className="text-2xl font-semibold">아직 작성된 독후감이 없어요.</h2>
        <p className="text-sm text-gray-400 text-center">
          책을 읽고 난 후의 생각과 느낌을 <br /> 자유롭게 기록해보세요.
        </p>
        <Button amount="one" onClick={()=>setIsClick(true)}>독후감 작성하기</Button>
      </div>
    </>
  );
}
export default BookReport