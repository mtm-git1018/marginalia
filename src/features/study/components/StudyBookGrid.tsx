import type { Book } from "@/shared/types/type"
import { useNavigate } from "react-router"
import StudyBookCard from "./StudyBookCard";


function StudyBookGrid({books}:{books:Book[] | undefined}) {
  
  const navigate = useNavigate()

  if (!books || books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-gray-400 text-lg">등록된 책이 없습니다.</p>
      </div>
    );
  }


  return (
    <ul className="grid mt-10 grid-cols-3 md:grid-cols-6 gap-6">
      {books?.map(({ book_id, thumbnail, title }) => (
        <li
          key={book_id}
          className="flex flex-col items-center gap-3 text-center cursor-pointer max-w-40"
          onClick={() => navigate(book_id)}
        >
          <StudyBookCard
            key={book_id}
            thumbnail={thumbnail}
            title={title}
          />
        </li>
      ))}
    </ul>
  );
}
export default StudyBookGrid