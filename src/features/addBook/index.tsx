import { BsArrowLeft } from "react-icons/bs"
import Button from "../../shared/components/Button";
import SearchBook from "./components/SearchBook";
import ReadStatus from "./components/ReadStatus";
import AdjustBook from "./components/AdjustBook";
import { useNavigate} from "react-router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../shared/api/firebase";
import { useState } from "react";
import type { BookResPonse } from "./api/useBookSearch";




function AddBook() {
  const navigate = useNavigate()
 
  const [book,setBook] = useState<BookResPonse | null>()
  console.log(book)


  /* 
    등록버튼을 누르면 생겨야하는 일,
    책의 썸네일과 제목, 저자,출판,번역 상태를 저장
    study로 해당 정보를 이동시켜야함.
  */
  const handleSave = async( ) => {
    if(!book) return
    const docRef = await addDoc(collection(db, 'books'), {
      title: book.title,
      story: book.contents,
      publisher: book.publisher,
      status: '',
      thumbnail: book.thumbnail,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    })
    console.log(docRef)

    await navigate(`study`)
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
        <SearchBook book={book} setBook={ setBook } />
      </section>


      <section className="mt-10">
        <ReadStatus />
      </section>

      <section className="mt-10">
        <AdjustBook/>
      </section>

      <section className="flex flex-col gap-1 mt-10">
        <Button amount="one" onClick={handleSave}>등록</Button>
      </section>
    </div>
  );
}
export default AddBook