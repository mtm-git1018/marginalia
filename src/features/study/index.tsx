import {  useOutletContext, useParams } from "react-router";
import { useBooks } from "../addBook/api/useBookData";
import { useMemo, useState } from "react";
import type { RootOutletContext } from "../../app/routes";
import StudyHeader from "./components/StudyHeader";
import CategoryTab from "./components/CategoryTab";
import { CATEGORY_TAB } from "./constant/categoryTabs";
import StudyBookGrid from "./components/StudyBookGrid";
import SEO from "@/shared/components/seo/SEO";

function Study() {
  const { id } = useParams()
  const {userProfile} = useOutletContext<RootOutletContext>()
  const { data: books } = useBooks(id ?? '')
  const [activeTab, setActiveTab] = useState(0)
  

  const filteredBooks = useMemo(() => {
    if (!books) return undefined
    
    const selectedStatus = CATEGORY_TAB[activeTab].status

    return selectedStatus === 'all'
      ? books
      : books?.filter((item) => item.status === selectedStatus);
  },[books,activeTab])
 
  return (
    <>
      <SEO
        title="내 서재"
        description="읽은 책, 읽고 있는 책, 읽고 싶은 책을 한눈에 관리하세요"
        keywords="서재, 독서 목록, 책 관리, 독서 기록"
      />
      <div className="mt-2">
        <StudyHeader nickname={userProfile.nickname} />
        <CategoryTab activeTab={activeTab} onTabChange={setActiveTab} />

        <section>
          <StudyBookGrid books={filteredBooks} />
        </section>
      </div>
    </>
  );
}
export default Study