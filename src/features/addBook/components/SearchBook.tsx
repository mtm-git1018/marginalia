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
    }, 300)
    
    return () => clearTimeout(timer)
  }
  console.log(data)
  
  return (
    <>
      <label htmlFor="searchbook" className="sr-only">
        책 검색
      </label>
      <input
        id='searchbook'
        type="text"
        value={keyword}
        placeholder="책 제목 검색"
        onChange={(e)=>handleSearch(e.target.value)}
        className="border rounded-sm border-border w-full p-2"
      />
    </>
  );
}
export default SearchBook