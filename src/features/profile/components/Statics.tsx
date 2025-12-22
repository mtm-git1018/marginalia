import { useParams } from "react-router";
import { useBooks } from "../../../shared/api/useBookData";
import BackButton from "../../../shared/components/button/BackButton";

function Statics() {

  const { id } = useParams()
  const { data } = useBooks(id ?? '')
 
  const COLLIGATE_STATIC = [
    {
      staticName: '완독',
      staticItem: data?.filter((item) => item.status == 'done').length,
    },
    {
      staticName: '읽는 중',
      staticItem: data?.filter((item) => item.status == 'reading').length,
    },
    {
      staticName: '읽고싶은',
      staticItem: data?.filter((item) => item.status == 'want_read').length,
    },
  ];
 
  return (
    <div>
      <header className="flex items-center gap-3">
        <BackButton />
        <p>이전으로 돌아가기</p>
      </header>
      <section className="bg-white rounded-lg px-3 py-5 mt-4">
        <h1 className="font-semibold text-xl">독서 현황</h1>

        <ul className="grid grid-cols-3 gap-4 pt-5">
          {
            COLLIGATE_STATIC.map(({ staticItem, staticName }) => (
            <li
              className="bg-background rounded-lg flex-center flex-col gap-1 p-2"
              key={staticName}
            >
              <span className="text-sageGreen font-black text-2xl">{staticItem}</span>
              <p>{staticName}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>차트</section>
      <section>선호장르??</section>
    </div>
  );
}
export default Statics