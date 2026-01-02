import SearchBook from "./components/SearchBook";
import ReadStatus from "./components/ReadStatus";
import { useState } from "react";
import { supabase } from "../../shared/api/supabase";
import type { Tables } from "../../shared/api/database.types";
import type { BookResPonse } from "./api/useBookSearch";
import { useNavigate, useParams } from "react-router";
import Button from "../../shared/components/button/Button";
import SEO from "@/shared/components/seo/SEO";
import AddBookHeader from "./components/AddBookHeader";
import { sweetAlert, sweetError, sweetSuccess } from "@/shared/utill/swal";

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
      sweetAlert('책을 추가해주세요.')
      return
    }

    try {
      const { data: existBook, error: checkError } = await supabase.from('books').select('*').match({
        user_id: id,
        isbn: book.isbn
      }).maybeSingle()

      if (checkError) {
        console.error('책 확인 중 오류', checkError)
        sweetError('확인 중 오류가 발생했습니다.')
        return
      }

      if (existBook) {
        sweetAlert('이미 저장된 책 입니다.')
        return
      }

    const convertBook = insertBook(book)
    const { error } = await supabase.from('books').insert({
      ...convertBook,
    })
    if (error) throw new Error('책 추가 실패')
    sweetSuccess('책을 추가하였습니다.')
    navigate(`/${id}/study`)
    }
    catch (error) {
      console.error('예상치 못한 오류', error)
      sweetError('예상치 못한 오류가 발생했습니다.')
   }
  }


  return (
    <div>
      <SEO
        title="책 추가"
        description="새로운 책을 서재에 추가하고 독서를 시작하세요."
        keywords="책 추가, 책 검색, 서재 등록"
      />
      <header className="flex items-center w-full">
       <AddBookHeader/>
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