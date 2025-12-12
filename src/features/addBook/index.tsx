import { BsArrowLeft } from "react-icons/bs"
import Button from "../../shared/components/Button";
import SearchBook from "./components/SearchBook";
import ReadStatus from "./components/ReadStatus";
import AdjustBook from "./components/AdjustBook";
import { useNavigate } from "react-router";




function AddBook() {
  const navigate = useNavigate()

  const handleSave = () => {
    navigate('/study')
  }
  return (
    <div>
      <header className="flex items-center w-full">
        <div className="flex w-55 items-center justify-between">
          <BsArrowLeft size={24} />
          <h1 className="font-semibold text-xl">책 추가하기</h1>
        </div>
      </header>

      <section className="mt-5">
        <SearchBook />
      </section>


      <section className="mt-10">
        <ReadStatus />
      </section>

      <section className="mt-10">
        <AdjustBook/>
      </section>

      <section className="flex flex-col gap-1 mt-10">
        <Button amount="one">등록</Button>
      </section>
    </div>
  );
}
export default AddBook