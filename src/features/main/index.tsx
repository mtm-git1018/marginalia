import { useNavigate, useParams} from "react-router";
import Button from "../../shared/components/Button";
import { useUserProfile } from "../../shared/api/useUserData";





function Main() {
  const navigate = useNavigate()
  const params = useParams()
  const { data } = useUserProfile(params.id ?? '')

  return (
    <div>
      <section className="flex flex-col gap-5">
        <h2>좋은 오후예요. { data?.nickname } 님</h2>
        <ul className="flex justify-between">
          <li className="flex flex-col items-center">
            <span>3</span>
            <p>이번달 읽은 책</p>
          </li>
          <li className="flex flex-col items-center">
            <span>3</span>
            <p>이번달 읽은 책</p>
          </li>
          <li className="flex flex-col items-center">
            <span>3</span>
            <p>이번달 읽은 책</p>
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
      <section>
        <p>{ data?.nickname }님이 지금 읽고 있는 책</p>
      </section>
      <section>
        <p>최근활동</p>
      </section>
    </div>
  );
}
export default Main