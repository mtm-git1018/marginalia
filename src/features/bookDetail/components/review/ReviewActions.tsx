import Button from "@/shared/components/button/Button";

interface Props{
  handleCancle:() => void
  handleSave: () => void
}


function ReviewActions({ handleCancle,handleSave}:Props) {
  return (
    <section className="flex gap-3 mt-3">
      <Button variant="primary" onClick={handleCancle}>
        취소
      </Button>
      <Button variant="primary" onClick={handleSave}>
        등록
      </Button>
    </section>
  );
}
export default ReviewActions