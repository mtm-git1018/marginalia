import { Outlet, useNavigate, useParams } from "react-router";
import { useBooks } from "../../shared/api/useBookData";
import { useState } from "react";

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


  const handleTabClick = (index:number,path:string) => {
    setActiveTab(index)
    navigate(`${path}`)
  }

const filterBook =data && data.filter(item => item.book_id == book_id)
const [book] = filterBook || []

  if (isLoading) {
    return <p>데이터 로딩중</p>
  }

  return (
    <main>
      <header className="flex gap-3">
        <img src={book.thumbnail?? ''} alt={book.title ?? ''} />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font--semibold">{book.title}</h1>
          <p>{book.author}</p>
          <p className="text-sm">{book.publisher}</p>
          <p>{book.rate}</p>
        </div>
      </header>
      <ul className="flex gap-3 border-b mt-5">
        {TAB_MENU.map(({ tab,path }, index) => {
          const isActive = activeTab === index;
          return (
            <li
              key={tab}
              className={
                isActive
                  ? 'font-bold text-titleText border-b cursor-pointer'
                  : 'font-normal cursor-pointer'
              }
              onClick={() => handleTabClick(index,path)}
            >
              {tab}
            </li>
          );
        })}
      </ul>
      <section className="mt-3">
        <Outlet/>
      </section>
    </main>
  );
}
export default BookDetail