import { Link } from "react-router";
import Thumbnail from "../../../shared/components/image/Thumbnail";

interface Props{
  book_id: string,
  thumbnail: string | null,
  title: string | null,
  index: number
  author: string[] | null,
  publisher:string | null
}

function BookCard({book_id,thumbnail,title,author,publisher,index}:Props) {
  return (
    <Link to={`study/${book_id}`} className="flex gap-3 h-30">
      <div className="w-20 h-full overflow-hidden shrink- bg-gray-100">
        <Thumbnail thumbnail={thumbnail ?? ''} title={title ?? ''} index={index} />
      </div>
      <div>
        <p className="font-semibold line-clamp-2">{title}</p>
        <div className="flex gap-1 items-center">
          <p className="text-sm">{author}</p> |<p className="text-xs">{publisher}</p>
        </div>
      </div>
    </Link>
  );
}
export default BookCard