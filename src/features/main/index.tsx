import { useNavigate} from "react-router";
import { ReadProfile } from "../../shared/api/readProfile";
import Button from "../../shared/components/Button";
import { useAuth } from "../../shared/context/AuthContext";



function Main() {
  const { user } = useAuth()
  const uid = user?.uid
  const { data } = ReadProfile(uid ?? '')
 const navigate = useNavigate()
  return (
    <div>
      <section className="flex flex-col gap-5">
        <h2>좋은 오후예요. {data?.nickname}님</h2>
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
        <Button amount="one">서재로 이동하기</Button>
        <Button amount="one" onClick={() => {
          navigate(`addBook`)
        }}>
          책 추가하기
        </Button>
      </section>
      <section>
        <p>USER님이 지금 읽고 있는 책</p>
      </section>
      <section>
        <p>최근활동</p>
      </section>
    </div>
  );
}
export default Main