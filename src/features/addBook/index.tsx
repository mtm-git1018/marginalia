import SearchBook from "./components/SearchBook";
import ReadStatus from "./components/ReadStatus";
import { useState } from "react";
import { supabase } from "../../shared/api/supabase";
import type { Tables } from "../../shared/api/database.types";
import type { BookResPonse } from "./api/useBookSearch";
import { useNavigate, useParams } from "react-router";
import Button from "../../shared/components/button/Button";
import BackButton from "../../shared/components/button/BackButton";

export type Book = Tables<'books'>

function AddBook() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [book, setBook] = useState<BookResPonse | null>(null)


  const insertBook = (book: BookResPonse): Omit<Book, 'user_id'|'book_id' | 'created_at'| 'updated_at'> => {
    return {
      author: book.authors,
      isbn:book.isbn,
      publisher: book.publisher,
      status: book.status,
      story: book.contents,
      thumbnail: book.thumbnail,
      title: book.title,
      translators: book.translators,
    }
  }

  const handleSave = async () => {
    if (!book) {
      alert('책을 선택해주세요')
      return
    }

    try {
      const { data: existBook, error: checkError } = await supabase.from('books').select('*').match({
        user_id: id,
        isbn: book.isbn
      })

      if (checkError) {
        console.error('책 확인 중 오류', checkError)
        alert('확인 중 오류가 발생했습니다.')
        return
      }

      if (existBook) {
        alert('이미 저장된 책입니다.')
        return
      }

    const convertBook = insertBook(book)
    const { error } = await supabase.from('books').insert({
      ...convertBook,
    })
    if (error) throw new Error('책 추가 실패')
    alert('책을 추가했습니다.')
    navigate(`/${id}/study`)
    }
    catch (error) {
      console.error('예상치 못한 오류', error)
      alert('오류가 발생했습니다.')
   }
  }


  return (
    <div>
      <header className="flex items-center w-full">
        <div className="flex w-55 items-center justify-between">
          <BackButton/>
          <h1 className="font-semibold text-xl">책 추가하기</h1>
        </div>
      </header>

      <section className="mt-5">
        <SearchBook book={book} setBook={setBook} />
      </section>

      <section className="mt-10">
        <ReadStatus setBook={setBook} />
      </section>

      <section className="flex flex-col gap-1 mt-10">
        <Button variant="primary" onClick={handleSave}>
          등록
        </Button>
      </section>
    
    </div>
  );
}
export default AddBook