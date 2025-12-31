import BackButton from "@/shared/components/button/BackButton";

function StudyHeader({ nickname }:{nickname:string}) {
  return (
    <header className="flex gap-3 items-center">
      <BackButton />
      <h1 className="text-2xl">{nickname} 님의 서재</h1>
    </header>
  );
}
export default StudyHeader