import BackButton from "@/shared/components/button/BackButton";
import { useParams } from "react-router";


function BookDetailHeader() {
  const { id } = useParams()
  return (
    <header className="flex items-center gap-3">
      <BackButton path={`/${id}/study`} />
      <p>이전으로 돌아가기</p>
    </header>
  );
}
export default BookDetailHeader