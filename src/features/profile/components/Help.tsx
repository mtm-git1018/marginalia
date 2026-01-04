import { FaChevronDown } from "react-icons/fa6";
import BackButton from "../../../shared/components/button/BackButton"
import { useState } from "react";
import SEO from "@/shared/components/seo/SEO";

interface FAQ{
  question: string,
  answer: string,
  category?:string
}

function Help() {
  const [expanded,setExpanded] = useState<number|null>(null)
  const faqs: FAQ[] = [
    {
      question: '책을 추가하려면 어떻게 하나요?',
      answer:
        '홈 화면 하단의 + 버튼을 눌러주세요. 카카오 도서 검색으로 책을 찾고, 장르를 선택한 후 "읽고싶은/읽는중/완독" 상태를 정할 수 있어요.',
      category: 'book',
    },
    {
      question: '검색해도 책이 안 나와요',
      answer:
        '카카오 API에 없는 책이거나 절판된 책일 수 있어요. 정확한 제목과 저자명으로 다시 시도해보세요.',
      category: 'book',
    },
    {
      question: '독후감은 어디서 쓰나요?',
      answer:
        '서재 탭에서 책을 선택하면 상세 페이지로 이동해요. "독후감" 탭에서 별점(1-5점)과 감상을 자유롭게 작성할 수 있어요.',
      category: 'review',
    },
    {
      question: '별점을 수정할 수 있나요?',
      answer:
        '네! 책 상세 페이지의 독후감 탭에서 언제든지 별점과 내용을 수정할 수 있어요. 저장 버튼을 누르면 바로 반영돼요.',
      category: 'review',
    },
    {
      question: '문장은 몇 개까지 저장할 수 있나요?',
      answer:
        '한 책당 제한 없이 무제한으로 저장할 수 있어요. 책 상세의 "문장 모음" 탭에서 추가/삭제할 수 있어요.',
      category: 'quote',
    },
    {
      question: '통계는 어떻게 계산되나요?',
      answer:
        '"완독" 상태의 책만 통계에 포함돼요. 월별 독서량은 완독 날짜 기준이예요',
      category: 'stats',
    },
    {
      question: '책을 삭제하면 독후감도 같이 삭제되나요?',
      answer:
        '네, 책을 삭제하면 해당 책의 독후감, 저장한 문장 등 모든 데이터가 함께 삭제돼요. 삭제 전 확인 메시지가 나타나니 신중하게 결정해주세요.',
    },
    {
      question: '데이터가 사라질까 걱정돼요',
      answer:
        '모든 데이터는 클라우드(Supabase)에 안전하게 저장돼요. 로그인 계정만 기억하면 어떤 기기에서든 내 서재에 접근할 수 있어요.',
    },
    {
      question: '프로필 이미지를 변경하고 싶어요',
      answer:
        '마이페이지에서 프로필 사진을 탭하면 변경할 수 있어요. JPG, PNG 형식에 최대 5MB까지 업로드 가능해요.',
    },
    {
      question: '버그 및 개선 내용은 어디로 보내나요?',
      answer:'mtm1018@naver.com로 메일을 보내주시면 최대한 빠르게 반영하도록 하겠습니다.'
    }
  ];

  const handleExpand = (isExpanded:boolean,index:number) => {
    setExpanded(isExpanded ? null : index)
  }
  
  return (
    <>
      <SEO
        title="도움말"
        description="마지나리아를 더 잘 이용하는 방법 도움말을 참고해보세요"
        keywords="프로필, 도움말"
      />
      <div>
        <header className="flex gap-3 items-center">
          <BackButton />
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">도움말</h1>
            <p>자주 묻는 질문을 확인해보세요.</p>
          </div>
        </header>

        <section className="mt-10">
          <ul className="flex flex-col gap-3">
            {faqs.map(({ question, answer }, index) => {
              const isExpanded = expanded === index;
              return (
                <li
                  key={index}
                  className="bg-white border border-softTan rounded-lg overflow-hidden transition-all"
                >
                  <button
                    className="w-full flex items-start gap-3 text-left p-2 hover:bg-lightSand transition duration-200 bg-cream"
                    onClick={() => handleExpand(isExpanded, index)}
                  >
                    <span className="flex-1 text-sm font-medium text-deepBrown"> {question}</span>
                    <FaChevronDown
                      className={`mt-0.5 text-warmBrown shrink-0 transition
                    ${isExpanded ? 'rotate-180' : ''}
                    `}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all ${isExpanded ? 'max-h-90' : 'max-h-0'}`}
                  >
                    <div className="p-2 border-t border-softTan">
                      <p className="text-sm text-gray-700 leading-relaxed">{answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}
export default Help