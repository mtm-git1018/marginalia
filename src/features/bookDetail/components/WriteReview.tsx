import Button from "../../../shared/components/Button"
import { Star } from "../../../shared/components/star/Star"

function WriteReview() {
  return (
    <>
      <section>
        <h1>별점</h1>
        <div className="flex gap-1 ">
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
        </div>
      </section>
      <section>
        <h1>독후감</h1>
        <textarea name="" id="" rows={10} className="border-border rounded-lg border w-full bg-secondBg"></textarea>
      </section>
      <section className="flex gap-3">
        <Button amount="two">취소</Button>
        <Button amount="two">등록</Button>
      </section>
    </>
  );
}
export default WriteReview