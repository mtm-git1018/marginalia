import Button from "../../../shared/components/Button"

function BookReport() {
  return (
    <>
      <label htmlFor="bookreport" className="sr-only">독후감을 작성해주세요</label>
      <textarea name="" id="bookreport" placeholder="독후감 작성하기" className="w-full h-80 border rounded-lg p-2 border-border bg-secondBg" >
      
      </textarea>
      <Button amount='one'>등록</Button>
    </>
  )
}
export default BookReport