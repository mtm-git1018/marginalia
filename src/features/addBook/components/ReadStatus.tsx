import clsx from "clsx";
import { useState } from "react";

const READ_STATUS = ['📚 읽고 싶은 책', '📖 읽는 중인 책', '✅ 완독한 책'];

function ReadStatus() {
  const [currentTab,setCurrentTab] = useState(0)
  return (
    <>
      <h2>독서 상태 선택</h2>
      <ul className="flex  flex-col gap-2">
        {READ_STATUS.map((status, index) => (
          <li
            key={index}
            onClick={() => setCurrentTab(index)}
            className={clsx(`border rounded-full
               border-border p-1 flex-center font-semibold cursor-pointer`,
                 currentTab == index ? 'bg-text text-white' : '')}
            >
            {status}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ReadStatus;
