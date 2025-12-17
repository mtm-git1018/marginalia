import { Outlet, useParams } from "react-router";
import { useBooks } from "../../shared/api/useBookData";
import { useState } from "react";

const TAB_MENU = [
  {
    tab: '독후감',
  },
  {
    tab: '문장',
  },
  {
    tab: '관계도',
  },
];


function BookDetail() {
  const { id } = useParams();
  const { data } = useBooks(id ?? '');
  const [activeTab,setActiveTab] = useState(0)
  const [book] = data || []

  return (
    <main>
      <header className="flex  items-center gap-3">
        <img src={book.thumbnail ?? ''} alt={book.title ?? ''} />
        <div>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.publisher}</p>
          <p>{book.rate}</p>
        </div>
      </header>
      <ul className="flex gap-3 border-b mt-5">
        {TAB_MENU.map(({ tab }, index) => {
          const isActive = activeTab === index;
          return (
            <li
              key={tab}
              className={
                isActive
                  ? 'font-bold text-titleText border-b cursor-pointer'
                  : 'font-normal cursor-pointer'
              }
              onClick={() => setActiveTab(index)}
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