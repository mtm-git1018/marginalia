import { BsArrowLeft } from "react-icons/bs"
import Button from "../../shared/components/Button";
import SearchBook from "./components/SearchBook";


const READ_STATUS = ['📚 읽고 싶은 책','📖 읽는 중인 책','✅ 완독한 책']

function AddBook() {
  return (
    <div>
      <header className="flex items-center w-full">
        <div className="flex w-55 items-center justify-between">
          <BsArrowLeft size={24} />
          <h1 className="font-semibold text-xl">책 추가하기</h1>
        </div>
      </header>

      <section className="mt-5">
        <SearchBook/>
      </section>

      <section className="mt-10">
        <h2>독서 상태 선택</h2>
        <ul className="flex  flex-col gap-2">
          {READ_STATUS.map((status,index) => (
            <li
              key={index}
              className=" border rounded-full
               border-border p-1 flex-center font-semibold"
            >
              {status}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2>책 평가하기</h2>
      </section>
      <section className="flex flex-col gap-1 mt-10">
        <Button amount="one">등록</Button>
        <button>직접 정보 입력하기</button>
      </section>
    </div>
  );
}
export default AddBook