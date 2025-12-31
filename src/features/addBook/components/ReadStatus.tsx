import clsx from "clsx";
import { useState } from "react";
import type { BookResPonse } from "../api/useBookSearch";

type Read = 'reading' | 'want_read' | 'done' ;

const READ_STATUS = [
  {
    id: 0,
    status: 'reading',
    tab: '📖 읽는 중인 책',
  },
  {
    id: 1,
    status: 'want_read',
    tab: '📚 읽고 싶은 책',
  },
  {
    id: 2,
    status: 'done',
    tab: '✅ 완독한 책',
  },
];

interface Props {
   setBook: React.Dispatch<React.SetStateAction<BookResPonse | null >>;
}

function ReadStatus({ setBook }:Props ) {
  const [currentIndex,setCurrentIndex] = useState(0)
  const handleChoose = (status:Read,index:number) => {
    setBook(prev => {
      if (!prev) return prev
      return {
        ...prev,
        status
      }
    })
    setCurrentIndex(index)
  }
  return (
    <>
      <h2>독서 상태 선택</h2>
      <ul className="flex  flex-col gap-2 mt-3">
        {READ_STATUS.map(({id,status,tab}, index) => (
          <li
            key={index}
            onClick={()=>handleChoose(status as Read,id)}
            className={clsx(`border rounded-full
               border-softTan p-1 flex-center font-semibold cursor-pointer`,
                 currentIndex == index ? 'bg-warmBrown text-white' : '')}
            >
            {tab}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ReadStatus;
