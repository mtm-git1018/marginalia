import { Outlet} from "react-router";
import LoadingSpinner from "../../shared/components/loading/LoadingSpinner";
import BookDetailHeader from "./components/BookDetailHeader";
import { useFilteredBook } from "./hooks/useFilteredBook";
import BookInfoCard from "./components/BookInfoCard";
import BookDetailTabs from "./components/BookDetailTabs";
import SEO from "@/shared/components/seo/SEO";



function BookDetail() {
  const {book, isLoading, userId } = useFilteredBook()
  if (isLoading) {
    return <LoadingSpinner/>
  }

  return (
    <main className="mt-2">
      <SEO
        title={book?.title ?? ''}
        description={`${book?.author}의 "${book?.title}" 독서 기록 및 리뷰`}
        keywords={`${book?.title}, ${book?.author}, 독서 기록, 책 리뷰`}
      />
      <BookDetailHeader />
      <BookInfoCard book={book} userId={userId} />
      <BookDetailTabs />
      <section className="mt-3">
        <Outlet />
      </section>
    </main>
  );
}
export default BookDetail