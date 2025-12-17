import { useState } from "react";
import { Star } from "../../../shared/components/star/Star";
import type { BookResPonse } from "../api/useBookSearch";

interface Props {
   setBook: React.Dispatch<React.SetStateAction<BookResPonse | null >>;
}

function AdjustBook({setBook}:Props) {

  const [activeStar,setActiveStar] = useState(0)

  const rateScore = (starNum: number) => {
    setActiveStar(starNum)
       setBook((prev) => {
         if (!prev) return prev;
         return {
           ...prev,
           rate:starNum,
         };
       });
  }
  
  return (
    <>
      <h2>책 평가하기</h2>
      <ul className="flex gap-1 items-end">
        {[1,2,3,4,5].map((star) => (
          <li key={star}>
            <Star active={star <= activeStar} onClick={()=> rateScore(star)}/>
          </li>
        ))}
        <p className="text-xs">({activeStar}/5)</p>
      </ul>
    </>
  );
}
export default AdjustBook