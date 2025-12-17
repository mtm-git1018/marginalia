import { useNavigate, useParams } from "react-router";
import { useUserProfile } from "../../shared/api/useUserData";
import { useBooks } from "../../shared/api/useBookData";
import { useState } from "react";


  const CATEGORY_TAB = [
    {
      id: 0,
      tab: '전체',
      status: 'all',
    },
    {
      id: 1,
      tab: '읽는 중인 책',
      status: 'reading',
    },
    {
      id: 2,
      tab: '읽고 싶은 책',
      status: 'want_read',
    },
    {
      id: 3,
      tab: '다 읽은 책',
      status: 'done',
    },
  ];

function Study() {
  const {id} = useParams()
  const { data } = useUserProfile(id ?? '')
  const { data: books } = useBooks(id ?? '')
  const [activeTab,setActiveTab] = useState(0)
  const navigate = useNavigate()
   
  const filteredBooks =
   CATEGORY_TAB[activeTab].status === 'all'
    ? books
        : books?.filter((item) => item.status === CATEGORY_TAB[activeTab].status);

  return (
    <div className="mt-10">
      <h1 className="text-2xl">{data?.nickname} 님의 서재</h1>
      <ul className="flex gap-3 border-b mt-5">
        {CATEGORY_TAB.map(({ tab }, index) => {
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
      <ul className="grid mt-10 grid-cols-3 md:grid-cols-6 gap-6">
        {filteredBooks?.map(({ book_id, thumbnail, title }) => (
          <li key={book_id} className="flex flex-col items-center gap-3 text-center cursor-pointer max-w-40"
          onClick={()=>navigate(book_id)}
          >
            {/* ✅ 이미지 컨테이너: 그리드에 맞춰 자동 크기 */}
            <div className="w-full max-w-40 aspect-2/3 rounded-sm shadow-2xs overflow-hidden bg-gray-100">
              <img
                src={thumbnail ?? '/placeholder-book.png'}
                alt={title ?? '책 표지'}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ✅ 제목: 2줄 넘으면 말줄임 */}
            <p className="text-sm line-clamp-2 w-full">{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Study