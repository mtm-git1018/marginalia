import BackButton from "@/shared/components/button/BackButton";
import { useParams } from "react-router";

function StudyHeader({ nickname }:{nickname:string}) {
  const { id } = useParams()
  return (
    <header className="flex gap-3 items-center">
      <BackButton path={`/${id}`} />
      <h1 className="text-2xl">{nickname} 님의 서재</h1>
    </header>
  );
}
export default StudyHeader