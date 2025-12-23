import { Outlet, useNavigate, useParams } from "react-router";
import { useBooks, useDeleteBook } from "../addBook/api/useBookData";
import { useState } from "react";
import BackButton from "../../shared/components/button/BackButton";
import { FaRegTrashCan } from "react-icons/fa6";


const TAB_MENU = [
  {
    tab: '독후감',
    path:'review'
  },
  {
    tab: '문장',
    path:'quotes'
  },
];


function BookDetail() {
  const navigate = useNavigate()
  const { id,book_id } = useParams();
  const { data,isLoading } = useBooks(id ?? '');
  const [activeTab,setActiveTab] = useState(0)
  const {mutate} = useDeleteBook()

  const handleTabClick = (index:number,path:string) => {
    setActiveTab(index)
    navigate(`${path}`)
  }

  const handleDelete = (book_id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      mutate({
        user_id:id!,
        book_id
      })
    }
  }

const filterBook =data && data.filter(item => item.book_id == book_id)
const [book] = filterBook || []

  if (isLoading) {
    return <p>데이터 로딩중</p>
  }

  return (
    <main>
      <header className="flex items-center gap-3">
        <BackButton />
        <p>이전으로 돌아가기</p>
      </header>
      <article className="flex gap-3 mt-5">
        <img src={book.thumbnail ?? ''} alt={book.title ?? ''} />
        <div className="flex flex-col gap-1 w-full">
          <span className="flex justify-between">
            <h1 className="text-xl font--semibold line-clamp-2">{book.title}</h1>
            <div className="flex gap-2 pl-1">
              <button onClick={() => handleDelete(book.book_id)}>
                <FaRegTrashCan />
              </button>
            </div>
          </span>
          <p>{book.author}</p>
          <p className="text-sm">{book.publisher}</p>
          <select name="status" id="read-status" className="border px-2 py-1 border-softTan  rounded-sm mt-2">
            <option value="status">읽는 중</option>
            <option value="status">다 읽은 책</option>
            <option value="status">읽고 싶은 책</option>
          </select>
        </div>
      </article>
      <ul className="flex gap-3 border-b mt-5">
        {TAB_MENU.map(({ tab, path }, index) => {
          const isActive = activeTab === index;
          return (
            <li
              key={tab}
              className={
                isActive
                  ? 'font-bold text-titleText border-b cursor-pointer'
                  : 'font-normal cursor-pointer'
              }
              onClick={() => handleTabClick(index, path)}
            >
              {tab}
            </li>
          );
        })}
      </ul>
      <section className="mt-3">
        <Outlet />
      </section>
    </main>
  );
}
export default BookDetail