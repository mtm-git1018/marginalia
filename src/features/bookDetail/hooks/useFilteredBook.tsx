import { useBooks } from "@/features/addBook/api/useBookData"
import { useParams } from "react-router"
import { useMemo } from 'react';

export function useFilteredBook() {
  const { id, book_id } = useParams()
  const {data:books, isLoading} = useBooks(id ?? '')

  const book = useMemo(() => {
    if(!books || !book_id) return null
    return books.find((item) => item.book_id === book_id) ?? null
  }, [books,book_id])
  
  return {
    book,
    isLoading,
    userId:id
  }
}



