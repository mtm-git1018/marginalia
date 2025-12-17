import { useNavigate, useParams} from "react-router";
import Button from "../../shared/components/Button";
import { useUserProfile } from "../../shared/api/useUserData";
import { useBooks } from "../../shared/api/useBookData";





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
        <h2>좋은 오후예요. { data?.nickname } 님</h2>
        <ul className="flex justify-between">
          <li className="flex flex-col items-center">
            <span>{ done }</span>
            <p>이번달 읽은 책</p>
          </li>
          <li className="flex flex-col items-center">
            <span>{ reading?.length }</span>
            <p>독서 중인 책</p>
          </li>
          <li className="flex flex-col items-center">
            <span>{ wantRead }</span>
            <p>읽고 싶은 책</p>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-2 mt-8">
        <Button amount="one" onClick={() => {
          navigate('study')
        }}>서재로 이동하기</Button>
        <Button amount="one" onClick={() => {
          navigate(`addBook`)
        }}>
          책 추가하기
        </Button>
      </section>
      <section className="mt-10">
        <p>{data?.nickname}님이 지금 읽고 있는 책</p>
        <ul className="flex flex-col gap-4 mt-3">
          {
            reading?.map(({ book_id,thumbnail,title,author,publisher}) => (
              <li className="flex gap-3 rounded-lg h-30 p-2 border border-border" key={book_id}>
                  <img src={thumbnail ?? ''} alt={title ?? ''} className="aspect-6/7 h-full overflow-hidden"/>
                <div>
                  <p>{title}</p>
                  <p>{author}</p>
                  <p>{publisher }</p>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
      <section className="mt-10">
        <p>최근활동</p>
      </section>
    </div>
  );
}
export default Main