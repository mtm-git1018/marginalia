import BackButton from "@/shared/components/button/BackButton";

function AddBookHeader() {
  return (
    <div className="flex w-55 items-center justify-between">
      <BackButton />
      <h1 className="font-semibold text-xl">책 추가하기</h1>
    </div>
  );
}
export default AddBookHeader