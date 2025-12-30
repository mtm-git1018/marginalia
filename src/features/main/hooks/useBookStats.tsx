import { useMemo } from "react"
import type { Book } from "../../../shared/types/type"


function useBookStats(books:Book[]|undefined) {

  return useMemo(() => {
    if (!books) {
      return {
        doneCount: 0,
        readingCount: 0,
        wantReadCount:0,
     }
    }
    return {
      doneCount: books.filter((book) => book.status === 'done').length,
      readingCount: books.filter((book) => book.status === 'reading').length,
      wantReadCount: books.filter((book) => book.status === 'want_read').length,
    };

  },[books])
}
export default useBookStats