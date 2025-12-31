import SEO from '@/shared/components/seo/SEO';
import OnboardIntro from './components/OnboardIntro';
import OnboardSlider from './components/OnboardSlider';


function OnBoard() {

  return (
    <>
      <SEO
        title="시작하기"
        description="책장을 넘길때마다 남기고 싶은 순간들. PageMark에서 당신의 독서여정을 소중히 기록하세요"
        keywords="독서 기록, 독서 앱, 책 관리, 독서 다이어리"
      />
      <div className="flex-center flex-col h-full max-h-100dvh p-5 overflow-x-hidden  lg:flex-row lg:items-center lg:justify-center lg:max-w-screen">
        {/* 왼쪽 섹션 */}
        <OnboardIntro/>
        {/* 슬라이드 영역 */}
        <OnboardSlider  />
      </div>
    </>
  );
}

export default OnBoard;
