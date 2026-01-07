import { useParams } from "react-router";
import { useBooks } from "../../../addBook/api/useBookData";
import BarChartSection from "./BarChartSection";
import { getMonth } from "../../utill/getMonth";
import SEO from "@/shared/components/seo/SEO";
import StaticHeader from "./StaticHeader";
import SummationStatic from "./SummationStatic";

function Statics() {

  const { id } = useParams()
  const { data } = useBooks(id ?? '')
  const currentYear = new Date().getFullYear()

  const monthlyData = (() => {
    if (!data) return 
    
    const completedBook = data.filter((book) => book.status === 'done')
    const monthCount = new Array(12).fill(0)

    completedBook.filter((book) => {
      const bookYear = new Date(book.updated_at ?? '').getFullYear()
      return bookYear == currentYear
    }).forEach((book) => {
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
  return (
    <>
      <SEO
        title="통계"
        description="내가 언제 얼마나 책을 읽었지 알 수 있어요"
        keywords="프로필, 통계, 월별 통계"
      />

      <StaticHeader />
      <SummationStatic data={ data } />

      <section className="mt-5 bg-white rounded-lg px-3 py-5 ">
        <h2 className="font-semibold text-lg pb-5">{currentYear}년 월별 독서량</h2>
        <BarChartSection data={monthlyData} />
      </section>
    </>
  );
}
export default Statics