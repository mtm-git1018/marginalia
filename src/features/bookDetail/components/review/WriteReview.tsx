import { useState } from "react";
import { useUpsertBookDeatail } from "../../api/useBookDetail";
import { useParams } from "react-router";
import ReportRate from "./ReportRate";
import ReviewTextArea from "./ReviewTextArea";
import ReviewActions from "./ReviewActions";
import { sweetSuccess } from "@/shared/utill/swal";
import type { BookDetail } from "../../types/types";

interface Props {
  data:BookDetail | undefined | null
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function WriteReview({ data,setIsClick }:Props) {
  
  const { id, book_id } = useParams()
  const [activeStar, setActiveStar] = useState(data?.rate ?? 5)
  const [review,setReview] = useState(data?.review ?? '')

  const handleClick = (starNum: number) => {
    setActiveStar(starNum);
  };

  const handleCancle = () => {
    setIsClick(false)
  }
  const { mutate } = useUpsertBookDeatail();

  const handleSave = () => {
    mutate({
      user_id: id ?? '',
      book_id : book_id ?? '',
      review: review,
      rate:activeStar
    }, {
      onSuccess() {
        sweetSuccess('저장에 성공하였습니다.') 
        setIsClick(false)
      },
    })
  }

  return (
    <>
      <ReportRate activeStar={activeStar} onClick={handleClick } />
      <ReviewTextArea review={ review } setReview={setReview} />
      <ReviewActions handleCancle={handleCancle} handleSave={ handleSave} />
    </>
  );
}
export default WriteReview