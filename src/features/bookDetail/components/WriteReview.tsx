import { useState } from "react";


import { Star } from "../../../shared/components/star/Star"
import { useUpsertBookDeatail } from "../api/useBookDetail";
import { useParams } from "react-router";
import Button from "../../../shared/components/button/Button";

interface Props {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function WriteReview({ setIsClick }:Props) {
  
  const { id, book_id } = useParams()
  const [activeStar, setActiveStar] = useState(5)
  const [review,setReview] = useState('')
  const handleClick = (starNum:number) => {
    setActiveStar(starNum)
  }
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
    })
  }

  return (
    <>
      <section>
        <h1>별점</h1>
        <ul className="flex gap-1 ">
          {[1, 2, 3, 4, 5].map((star) => (
            <li key={star}>
              <Star active={star <= activeStar} onClick={() => handleClick(star)} />
            </li>
          ))}
          ({activeStar}/5)
        </ul>
      </section>
      <section className="mt-3">
        <h1>독후감</h1>
        <label htmlFor="review" className="sr-only">
          독후감을 자유롭게 작성해주세요
        </label>
        <textarea
          name="review_book"
          id="review"
          rows={10}
          className="border-softTan rounded-lg border w-full bg-secondBg p-2 text-left"
          placeholder="이 책을 읽고 어떤 생각이 드셨나요? 자유롭게 작성해 주세요
          "
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </section>
      <section className="flex gap-3 mt-3">
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
export default WriteReview