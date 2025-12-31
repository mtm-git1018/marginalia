import { useNavigate } from "react-router";
import type { Book } from "../../../shared/types/type";
import BookCard from "./BookCard";


interface Props {
  book : Book[] | undefined,
  nickname:string | null
}


function ReadingBook({ book, nickname }: Props) {
  const navigate = useNavigate()
  if(!book) return
  const displayBook = book.slice(0, 3)

  return (
    <>
      <header className="flex justify-between">
        <h2 className="text-lg font-semibold">{nickname}님이 지금 읽고 있는 책</h2>
        <button type="button" onClick={() => navigate('study')}>
          <p className="text-sm duration-200 hover:font-semibold">전체 보기</p>
        </button>
      </header>
      <ul className="flex flex-col gap-4 mt-3">
        {displayBook?.map(({ book_id, thumbnail, title, author, publisher }, index) => (
          <li className=" rounded-lg p-2 border border-softTan" key={book_id}>
            <BookCard
              book_id={book_id}
              thumbnail={thumbnail}
              title={title}
              author={author}
              publisher={publisher}
              index={index}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ReadingBook