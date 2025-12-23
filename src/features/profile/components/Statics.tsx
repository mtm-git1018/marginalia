import { useParams } from "react-router";
import { useBooks } from "../../addBook/api/useBookData";
import BackButton from "../../../shared/components/button/BackButton";
import BarChartSection from "./BarChartSection";
import { getMonth } from "../utill/getMonth";
import { isbnFormatter } from "../utill/isbnFormatter";



function Statics() {

  const { id } = useParams()
  const { data } = useBooks(id ?? '')

  const monthlyData = (() => {
    if(!data) return 
    const completedBook = data.filter((book) => book.status === 'done')
    const monthCount = new Array(12).fill(0)

    completedBook.forEach((book) => {
      const month = getMonth(book.updated_at)
      if(!month) return
      if (month !== null) {
        monthCount[month - 1]++
      }
    })

    return monthCount.map((count, index) => ({
      month: `${index + 1}월`,
      books: count,
    }))
  })()

  if(!data) return
  const isbn = data.map((book) => isbnFormatter(book.isbn))
  console.log(isbn)

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
        <h1 className="font-semibold text-lg">독서 현황</h1>

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
      <section className="mt-5 bg-white rounded-lg px-3 py-5 ">
        <h2 className="font-semibold text-lg pb-5">{new Date().getFullYear() }년 월별 독서량</h2>
        <BarChartSection data={monthlyData} />
      </section>
      <section className="mt-5 bg-white rounded-lg px-3 py-5">
        <h3 className="font-semibold text-lg">선호 장르</h3>
      </section>
    </div>
  );
}
export default Statics