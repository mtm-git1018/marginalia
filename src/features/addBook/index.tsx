import { BsArrowLeft } from "react-icons/bs"
import Button from "../../shared/components/Button";
import SearchBook from "./components/SearchBook";
import ReadStatus from "./components/ReadStatus";
import AdjustBook from "./components/AdjustBook";
import { useState } from "react";
import { supabase } from "../../shared/api/supabase";
import { useParams } from "react-router";
import type { Tables } from "../../shared/api/database.types";

export type Book = Tables<'books'>

function AddBook() {


  
  const [book, setBook] = useState<Book | null>(null)
  const params = useParams()

  const handleSave = async(id:string) => {
    const { error } = await supabase.from('books').insert({
      ...book
    }).eq('user_id',id)
    if(error)throw new Error('책 추가 실패')
  }
  
  console.log(book)
  
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
        <ReadStatus setBook={ setBook } />
      </section>

      <section className="mt-10">
        <AdjustBook/>
      </section>

      <section className="flex flex-col gap-1 mt-10">
        <Button amount="one" onClick={()=>handleSave(params)}>등록</Button>
      </section>
    </div>
  );
}
export default AddBook