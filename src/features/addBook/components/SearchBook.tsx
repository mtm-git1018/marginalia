import { useBookSearch } from "../api/useBookSearch";
import { useState } from "react";


function SearchBook() {
  const [keyword,setKeyword] = useState<string>('')
  const [debouncedKeyword, setDebouncedKeyword] = useState('')
  
  const { data } = useBookSearch({
    query: debouncedKeyword  
  })

  const handleSearch = (value: string) => {
    setKeyword(value)
    
    const timer = setTimeout(() => {
      setDebouncedKeyword(value)
    }, 500)
    
    return () => clearTimeout(timer)
  }

  
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
        onChange={(e) => handleSearch(e.target.value)}
        className="border rounded-sm border-border w-full p-2"
      />
      {data && (
        <ul className="w-full bg-white p-2 h-100 overflow-y-scroll border flex flex-col gap-3">
          {data.map(({ thumbnail, title, authors, publisher, isbn,translators }) => (
            <li key={isbn} className="flex gap-3 items-center cursor-pointer duration-300 hover:bg-background">
              <div className="w-20 ">
                <img src={thumbnail} alt={title} />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-titleText text-lg">{title}</h2>
                <p>저자 : {authors.length > 0 ? authors : '미상'}</p>
                <p className="text-sm">출판 : {publisher} | 번역 : { translators}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default SearchBook