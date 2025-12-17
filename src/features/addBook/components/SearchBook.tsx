import { useBookSearch, type BookResPonse } from "../api/useBookSearch";
import { useEffect, useState } from "react";


interface Props {
  book: BookResPonse | null
  setBook: React.Dispatch<React.SetStateAction<BookResPonse | null >>;
}

function SearchBook({ book,setBook } :Props) {
  const [keyword, setKeyword] = useState<string>('')
  const [open,setOpen] = useState(false)
  const [debouncedKeyword, setDebouncedKeyword] = useState('')
  const { data } = useBookSearch({
    query: debouncedKeyword  
  })

   useEffect(() => {
     const timer = setTimeout(() => {
       setDebouncedKeyword(keyword);
     }, 500); 

     return () => clearTimeout(timer); 
   }, [keyword]);

   const handleSearch = (value: string) => {
     setKeyword(value); 
   };

  return (
    <>
      <label htmlFor="searchbook" className="sr-only">
        책 검색
      </label>
      <input
        id="searchbook"
        type="text"
        value={keyword}
        placeholder="책 제목 검색"
        onChange={(e) => {
          setOpen(true)
          handleSearch(e.target.value)
        }}
        className="border rounded-sm border-border w-full p-2"
      />
      {
        open && data && data.length > 0 && (
        <ul className="w-full bg-white p-2 h-100 overflow-y-scroll border flex flex-col gap-3">
          {data && data.map(({ thumbnail, title, authors, publisher, isbn, translators,contents }) => (
            <li
              key={isbn}
              className="flex gap-3 items-center cursor-pointer duration-300 hover:bg-background"
              onClick={() => {
                setOpen(false)
                setBook((prev) => ({
                  ...prev!,
                  thumbnail: thumbnail,
                  title: title,
                  contents:contents,
                  authors: authors,
                  publisher: publisher,
                  translators: translators,
                }))
              }
              }
            >
              <div className="w-20 ">
                <img src={thumbnail} alt={title} />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-titleText text-lg">{title}</h2>
                <p>저자 : {authors.length > 0 ? authors : '미상'}</p>
                <p className="text-sm">
                  출판 : {publisher} {translators.length > 0 ? `| 번역 : ${translators}` : ''}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {book && (
        <section className="flex items-center gap-3 mt-5">
          <div className="w-20 ">
            <img src={book.thumbnail} alt={book.title} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-titleText text-lg">{book.title}</h2>
            <p>저자 : {book.authors.length > 0 ? book.authors : '미상'}</p>
            <p className="text-sm">
              출판 : {book.publisher} {book.translators.length > 0 ? `| 번역 : ${book.translators}` : ''}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
export default SearchBook