import { useState } from "react";
import { STATUS_OPTION } from "../constant/StatusOption";
import type { Status } from "../types/types";
import { useUpdateBookStatus } from "../api/useBookDetail";

interface Props{
  bookId:string
  initStatus :Status
}


function BookStatusSelect({ bookId,initStatus }:Props) {
  const [status,setStatus] = useState<Status>(initStatus)
  const { mutate } = useUpdateBookStatus()
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as Status
    const preStatus = status

    setStatus(newStatus)

    mutate(
      {
        book_id: bookId,
        status: newStatus
      },
      {
        onError: () => {
          setStatus(preStatus)
          alert('상태 변경에 실패했습니다.')
        }
      }
    )
  }; 

  return (
    <>
      <label htmlFor="read-status" className="sr-only">읽기 상태</label>
      <select
        name="status"
        id="read-status"
        className="border px-2 py-1 border-softTan  rounded-sm mt-2"
        value={initStatus}
        onChange={(e) => handleChange(e)}
      >
        {STATUS_OPTION.map(({ value, label }) => (
          <option value={value} key={value}>{label}</option>
        ))}
      </select>
    </>
  );
}
export default BookStatusSelect