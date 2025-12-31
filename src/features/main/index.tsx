import { useOutletContext, useParams} from "react-router";
import { useBooks } from "../addBook/api/useBookData";
import { sayHi } from "./utill/sayHi";
import type { RootOutletContext } from "../../app/routes";
import ReadingBook from "./components/ReadingBook";
import ReadingStatic from "./components/ReadingStatic";
import ShortCutButtons from "./components/ShortCutButtons";
import SEO from "@/shared/components/seo/SEO";

function Main() {

  const params = useParams()
  const { userProfile } = useOutletContext<RootOutletContext>()
  const { data:books } = useBooks(params.id ?? '')

  const reading = books?.filter((book) => book.status == 'reading')

  const nickname = userProfile.nickname
 
  return (
    <>
      <SEO
        title="홈"
        description="나만의 디지털 독서 공간에서 독서 여정을 시작하세요"
        keywords="독서 홈, 독서 대시보드"
      />
      <section className="flex flex-col gap-5">
        <h2 className="text-xl text-deepBrown font-serif font-semibold">
          {sayHi()} {userProfile?.nickname} 님
        </h2>
        <ReadingStatic books={books} />
      </section>

      <section className="flex flex-col gap-2 mt-8">
        <ShortCutButtons />
      </section>

      <section className="mt-10">
        <ReadingBook book={reading} nickname={nickname} />
      </section>
    </>
  );
}
export default Main