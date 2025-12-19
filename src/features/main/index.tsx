import { Link, useNavigate, useParams} from "react-router";
import Button from '../../shared/components/button/Button';

import { useUserProfile } from "../../shared/api/useUserData";
import { useBooks } from "../../shared/api/useBookData";
import { sayHi } from "./utill/sayHi";





function Main() {
  const navigate = useNavigate()
  const params = useParams()
  const { data } = useUserProfile(params.id ?? '')
  const {data:books} = useBooks(params.id ?? '')


  const done = books?.filter((book) => book.status == 'done').length
  const reading = books?.filter((book) => book.status == 'reading')
  const wantRead = books?.filter((book) => book.status == 'want_read').length;


  return (
    <div>
      <section className="flex flex-col gap-5">
        <h2 className="text-xl text-deepBrown">
          {sayHi()} {data?.nickname} 님
        </h2>
        <ul className="flex justify-between">
          <li className="flex flex-col items-center">
            <span className="text-lg">{done}</span>
            <p>이번달 읽은 책</p>
          </li>
          <li className="flex flex-col items-center">
            <span className="text-lg">{reading?.length}</span>
            <p>독서 중인 책</p>
          </li>
          <li className="flex flex-col items-center">
            <span className="text-lg">{wantRead}</span>
            <p>읽고 싶은 책</p>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-2 mt-8">
        <Button
          amount="one"
          onClick={() => {
            navigate('study');
          }}
        >
          서재로 이동하기
        </Button>
        <Button
          amount="one"
          onClick={() => {
            navigate(`addBook`);
          }}
        >
          책 추가하기
        </Button>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">{data?.nickname}님이 지금 읽고 있는 책</h2>
        <ul className="flex flex-col gap-4 mt-3">
          {reading?.map(({ book_id, thumbnail, title, author, publisher }) => (
            <Link to={`study/${book_id}`} key={book_id }>
              <li className="flex gap-3 rounded-lg h-30 p-2 border border-softTan">
                <div className="w-20 h-full overflow-hidden shrink-0">
                  <img
                    src={thumbnail ?? ''}
                    alt={title ?? ''}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold line-clamp-2">{title}</p>
                  <div className="flex gap-1 items-center">
                    <p className="text-sm">{author}</p> |<p className="text-xs">{publisher}</p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default Main