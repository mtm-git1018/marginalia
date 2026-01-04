import { useParams } from "react-router";
import { useBooks } from "../../addBook/api/useBookData";
import BackButton from "../../../shared/components/button/BackButton";
import BarChartSection from "./BarChartSection";
import { getMonth } from "../utill/getMonth";
import SEO from "@/shared/components/seo/SEO";




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
    <>
      <SEO
        title="통계"
        description="내가 언제 얼마나 책을 읽었지 알 수 있어요"
        keywords="프로필, 통계, 월별 통계"
      />
      <header className="flex items-center gap-3">
        <BackButton />
        <p>이전으로 돌아가기</p>
      </header>
      <section className="bg-white rounded-lg px-3 py-5 mt-4">
        <h1 className="font-semibold text-lg">독서 현황</h1>

        <ul className="grid grid-cols-3 gap-4 pt-5">
          {COLLIGATE_STATIC.map(({ staticItem, staticName }) => (
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
        <h2 className="font-semibold text-lg pb-5">{new Date().getFullYear()}년 월별 독서량</h2>
        <BarChartSection data={monthlyData} />
      </section>
    </>
  );
}
export default Statics