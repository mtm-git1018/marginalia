import { useDeleteBook } from "@/features/addBook/api/useBookData";
import { FaRegTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router";

interface Props{
  userId: string,
  bookId:string
}

function DeleteBookButton({userId,bookId }:Props) {

  const navigate = useNavigate()
  const {mutate,isPending} = useDeleteBook()

  const handleDelete = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      mutate({
        user_id: userId,
        book_id:bookId,
      }, {
        onSuccess: () => {
          navigate(`/${userId}/study`)
        }
      });
    }
  };


  return (
    <div className="flex gap-2 pl-1">
      <button
        onClick={handleDelete}
        disabled={isPending}
        aria-label="책 삭제"
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
}
export default DeleteBookButton