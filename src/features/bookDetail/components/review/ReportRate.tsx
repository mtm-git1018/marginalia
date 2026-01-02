import { Star } from '@/shared/components/star/Star';

interface Props{
  activeStar: number 
  onClick: (starNum:number) => void
}

function ReportRate({ activeStar,onClick}:Props) {

  return (
    <section>
      <h1>별점</h1>
      <ul className="flex gap-1 ">
        {[1, 2, 3, 4, 5].map((star) => (
          <li key={star}>
            <Star active={star <= activeStar} onClick={() => onClick(star)} />
          </li>
        ))}
        ({activeStar}/5)
      </ul>
    </section>
  );
}
export default ReportRate;
