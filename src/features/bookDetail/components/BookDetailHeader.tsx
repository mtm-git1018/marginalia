import BackButton from "@/shared/components/button/BackButton";

function BookDetailHeader() {
  return (
    <header className="flex items-center gap-3">
      <BackButton />
      <p>이전으로 돌아가기</p>
    </header>
  );
}
export default BookDetailHeader