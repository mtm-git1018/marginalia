interface Props {
  review: string;
  setReview: React.Dispatch<React.SetStateAction<string>>;
}

function ReviewTextArea({ review,setReview}:Props) {
  return (
    <section className="mt-3">
      <h1>독후감</h1>
      <label htmlFor="review" className="sr-only">
        독후감을 자유롭게 작성해주세요
      </label>
      <textarea
        name="review_book"
        id="review"
        rows={10}
        value={review}
        className="border-softTan rounded-lg border w-full bg-secondBg p-2 text-left"
        placeholder="이 책을 읽고 어떤 생각이 드셨나요? 자유롭게 작성해 주세요
          "
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
    </section>
  );
}
export default ReviewTextArea