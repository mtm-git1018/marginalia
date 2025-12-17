import { MdOutlineBookmarkBorder } from "react-icons/md";
import Button from "../../../shared/components/Button";
import { useState } from "react";
import WriteQuotes from "./WriteQuotes";


function BookQuotes() {
  const [isClick,setIsClick] = useState(false)
  

  if (isClick) {
    return (
      <WriteQuotes></WriteQuotes>
    )
  }
  return (
    <div className="flex-col flex-center gap-3">
      <div className="w-20 h-20 rounded-full relative bg-border flex-center">
        <MdOutlineBookmarkBorder size={40 } /> 
      </div>
      <h2 className="text-2xl font-semibold">저장된 문장이 없아요</h2>
      <p className="text-sm text-gray-400 text-center">
        마음에 드는 문장이나 <br /> 기억하고 싶은 구절을 저장해보세요
      </p>
      <Button amount="one" onClick={() => setIsClick(true)}>
        문장 추가하기
      </Button>
    </div>
  );
}
export default BookQuotes