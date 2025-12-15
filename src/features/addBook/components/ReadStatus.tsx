import clsx from "clsx";
import { useState } from "react";


const READ_STATUS = [
  {
    id: 0,
    status: 'reading',
    tab: '📖 읽는 중인 책',
  },
  {
    id: 1,
    status: 'wantRead',
    tab: '📚 읽고 싶은 책',
  },
  {
    id: 2,
    status: 'complete',
    tab: '✅ 완독한 책',
  },
];

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

function ReadStatus({ setStatus }:Props ) {
  const [currentIndex,setCurrentIndex] = useState(0)
  const handleChoose = (status:string,index:number) => {
    setStatus(status)
    setCurrentIndex(index)
  }
  return (
    <>
      <h2>독서 상태 선택</h2>
      <ul className="flex  flex-col gap-2">
        {READ_STATUS.map(({id,status,tab}, index) => (
          <li
            key={index}
            onClick={()=>handleChoose(status,id)}
            className={clsx(`border rounded-full
               border-border p-1 flex-center font-semibold cursor-pointer`,
                 currentIndex == index ? 'bg-text text-white' : '')}
            >
            {tab}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ReadStatus;
