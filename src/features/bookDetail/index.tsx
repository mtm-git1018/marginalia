import { Outlet} from "react-router";
import LoadingSpinner from "../../shared/components/loading/LoadingSpinner";
import BookDetailHeader from "./components/BookDetailHeader";
import { useFilteredBook } from "./hooks/useFilteredBook";
import BookInfoCard from "./components/BookInfoCard";
import BookDetailTabs from "./components/BookDetailTabs";



function BookDetail() {
  const {book, isLoading, userId } = useFilteredBook()
  if (isLoading) {
    return <LoadingSpinner/>
  }

  return (
    <main>
     <BookDetailHeader/>
      <BookInfoCard book={book} userId={userId} />
      <BookDetailTabs/>
      <section className="mt-3">
        <Outlet />
      </section>
    </main>
  );
}
export default BookDetail