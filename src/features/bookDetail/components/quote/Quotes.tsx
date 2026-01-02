import Button from "@/shared/components/button/Button"
import type { BookDetail } from "../../types/types"
import { HiOutlinePencil } from "react-icons/hi2";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDeleteQuote } from "../../api/useBookDetail";

interface Props {
  data: BookDetail;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  handleEdit: (index:number) => void
}

function Quotes({ data, onClick, handleEdit }: Props) {
  
  const { mutate } = useDeleteQuote()
  
  const handleDelete = (index:number) => {
    mutate({
      user_id:data.user_id!,
      book_id: data.book_id!,
      index,
      quote: data.quote,
      pageNumber:data.page_number
    })
  }

  return (
    <>
      <Button variant="primary" onClick={() => onClick(true)}>
        문장 더 추가하기
      </Button>
      <ul className="flex flex-col gap-3 mt-3">
        {data.quote?.map((quote, index) => (
          <li className="border border-softTan rounded-lg min-h-15 p-2" key={index}>
            <div className="flex justify-between">
              <p>"{quote}"</p>

              <div className="flex gap-2">
                <button onClick={() => handleEdit(index)}>
                  <HiOutlinePencil />
                </button>
                <button onClick={() => handleDelete(index)}>
                  <FaRegTrashCan />
                </button>
              </div>
            </div>
            <p className="text-xs text-dustyBrown pt-3">
              {data.page_number?.[index] ? `p.${data.page_number[index]}` : '페이지 미기재'}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Quotes