import Thumbnail from "@/shared/components/image/Thumbnail";
import type { Book } from "@/shared/types/type";
import DeleteBookButton from "./DeleteBookButton";
import BookStatusSelect from "./BookStatusSelect";

interface Props{
  book: Book | null,
  userId:string | undefined
}

function BookInfoCard({ book, userId }: Props) {
  if(!book || !userId) return
  return (
    <article className="flex gap-3 mt-5">
      <div className="flex-shirink-0">
        <Thumbnail thumbnail={book.thumbnail} title={book.title} />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <span className="flex justify-between">
          <h1 className="text-xl font--semibold line-clamp-2">{book.title}</h1>
          <DeleteBookButton bookId={book.book_id} userId={ userId} />
        </span>
        <p>{book.author}</p>
        <p className="text-sm">{book.publisher}</p>
        <BookStatusSelect bookId={book.book_id} initStatus={ book.status ?? 'reading' } />
      </div>
    </article>
  );
}
export default BookInfoCard