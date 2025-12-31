
import Template from './components/Template';
import image1 from '@/shared/asset/welcomeimage1.webp';
import image2 from '@/shared/asset/welcomeimage2.webp';
import image3 from '@/shared/asset/welcomeimage3.webp';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import Button from '../../shared/components/button/Button';
import SEO from '@/shared/components/seo/SEO';


const TEMPLATE_ITEMS = [
  {
    id: 1,
    title1: '책장을 넘길 때마다',
    title2: '남기고 싶은 순간들',
    description: '당신의 독서 여정을 소중히 기록하세요',
    src: image1,
    alt: '책과 찻잔 이미지',
  },
  {
    id: 2,
    title1: '책과 함께하는',
    title2: '모든 순간을 기록',
    description: '책을 읽고, 생각을 정리하고, 다시 돌아보는 나만의 세계',
    src: image2,
    alt: '펼쳐진 책 사진',
  },
  {
    id: 3,
    title1: '당신의 독서 여정',
    title2: '시작할 준비가 되셨나요?',
    description: '지금 이 순간부터 당신의 독서가 특별해집니다.',
    src: image3,
    alt: '책을 읽고있는 사람 이미지',
  },
];

function OnBoard() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoplayRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TEMPLATE_ITEMS.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <>
      <SEO
        title="시작하기"
        description="책장을 넘길때마다 남기고 싶은 순간들. PageMark에서 당신의 독서여정을 소중히 기록하세요"
        keywords="독서 기록, 독서 앱, 책 관리, 독서 다이어리"
      />
      <div className="flex flex-col items-center h-full p-5 justify-between overflow-x-hidden  lg:flex-row lg:items-center lg:justify-center lg:max-w-screen">
        {/* 왼쪽 섹션 */}
        <section className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-8 lg:flex-1 lg:max-w-2xl">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-serif text-deepBrown leading-tight">
              독서 기록의 새로운 시작
            </h2>
            <p className="text-lg text-warmBrown leading-relaxed">
              Marginalia와 함께 당신의 독서 여정을 기록하세요
            </p>
          </div>
          <div className="max-w-sm">
            <Link to="/login">
              <Button variant="primary">시작하기</Button>
            </Link>
          </div>
        </section>

        {/* 슬라이드 영역 */}
        <section className="flex flex-col gap-8 w-full lg:flex-1 lg:gap-12 lg:max-w-2xl">
          {/* 슬라이드 컨테이너 */}
          <div className="relative w-full min-h-[500px] lg:min-h-[600px] overflow-hidden">
            {TEMPLATE_ITEMS.map(({ title1, title2, description, src, alt, id }, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={id}
                  className={`absolute inset-0 w-full h-full flex flex-col items-center transition-all duration-700 ease-in-out 
                  ${
                    isActive
                      ? 'opacity-100 translate-x-0 z-10 lg:translate-x-0'
                      : index < currentSlide
                        ? 'opacity-0 -translate-x-full z-0 lg:opacity-0 lg:translate-x-0'
                        : 'opacity-0 translate-x-full z-0 lg:opacity-0 lg:translate-x-0'
                  }`}
                >
                  <Template
                    title1={title1}
                    title2={title2}
                    description={description}
                    src={src}
                    alt={alt}
                  />
                </div>
              );
            })}
          </div>

          {/* 인디케이터 */}
          <div className="flex gap-2 justify-center" role="tablist" aria-label="슬라이드 선택">
            {TEMPLATE_ITEMS.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-label={`${index + 1}번째 슬라이드로 이동`}
                aria-current={index === currentSlide ? 'true' : 'false'}
                className={`w-10 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-warmBrown' : 'border border-softTan'
                }`}
                onClick={() => {
                  setCurrentSlide(index);
                  startAutoPlay();
                }}
              />
            ))}
          </div>

          {/* 모바일 버튼 */}
          <div className="w-full lg:hidden">
            <Link to="login">
              <Button variant="primary">시작하기</Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default OnBoard;
