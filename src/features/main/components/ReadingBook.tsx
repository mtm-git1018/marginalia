import { useNavigate } from "react-router";
import Button from "../../../shared/components/button/Button";
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
  const hasMore = book.length > 3
  return (
    <>
      <h2 className="text-lg font-semibold">{nickname}님이 지금 읽고 있는 책</h2>

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
      {hasMore && (
        <Button
          variant="secondary"
          onClick={() => {
            navigate('study');
          }}
          className='mt-10'
        >
          더 보기
        </Button>
      )}
    </>
  );
}
export default ReadingBook