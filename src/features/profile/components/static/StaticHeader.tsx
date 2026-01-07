import BackButton from "@/shared/components/button/BackButton";
import { useParams } from "react-router";

function StaticHeader() {
  const { id } = useParams()
  return (
    <header className="flex items-center gap-3">
      <BackButton path={`/${id}/profile`} />
      <p>이전으로 돌아가기</p>
    </header>
  );
}
export default StaticHeader