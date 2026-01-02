import Button from "@/shared/components/button/Button"
import type { BookDetail } from "../../types/types"
import { HiOutlinePencil } from "react-icons/hi2";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDeleteQuote } from "../../api/useBookDetail";

interface Props {
  data: BookDetail;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  handleEdit: () =>void
}

function Quotes({ data, onClick, handleEdit }: Props) {
  
  const { mutate } = useDeleteQuote()
  
  const handleDelete = () => {
    mutate({
      book_id:data.book_id!
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
                <button onClick={handleEdit}>
                  <HiOutlinePencil />
                </button>
                <button onClick={handleDelete}>
                  <FaRegTrashCan />
                </button>
              </div>
            </div>
            <p className="text-xs text-dustyBrown pt-3">
              {data.page_number && `p.${data.page_number[index]}`}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Quotes