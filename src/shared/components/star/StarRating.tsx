import { useState } from "react";
import { Star } from "./Star";

function StarRating({ rate }: { rate:number | null}) {

  const [activeStar,setActiveStar] = useState(rate)

  const rateScore = (star:number) => {
    setActiveStar(star)
  }
  
  return <ul className="flex">
    {[1, 2, 3, 4, 5].map((star) => {
      return (
        <li key={star}>
          <Star active={star <= activeStar!} onClick={() => rateScore(star)} size={18}/>
        </li>
      );
  })}</ul>;
}
export default StarRating