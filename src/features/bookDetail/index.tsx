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
  const { id } = useParams();
  const { data,isLoading } = useBooks(id ?? '');
  const [activeTab,setActiveTab] = useState(0)
  const [book] = data || []

  const handleTabClick = (index:number,path:string) => {
    setActiveTab(index)
    navigate(`${path}`)
  }

  if (isLoading) {
    return <p>데이터 로딩중</p>
  }

  return (
    <main>
      <header className="flex  items-center gap-3">
        <img src={book.thumbnail?? ''} alt={book.title ?? ''} />
        <div>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.publisher}</p>
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
      <section className="mt-5">
        <Outlet/>
      </section>
    </main>
  );
}
export default BookDetail