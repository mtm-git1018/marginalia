import Button from '../../shared/components/Button';
import Template from './components/Template';
import image1 from '@/shared/asset/welcomeimage1.webp';
import image2 from '@/shared/asset/welcomeimage2.webp';
import image3 from '@/shared/asset/welcomeimage3.webp';
import { useEffect, useRef, useState } from 'react';

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
    <div className="flex flex-col justify-between items-center py-5 h-full overflow-hidden lg:flex-row lg:gap-4 lg:items-start">
      
      {/* 왼쪽: 텍스트 + 버튼 (웹에서만) */}
      <section className="hidden h-full lg:flex lg:flex-col lg:justify-center lg:gap-6">
        <div>
          <h2 className="text-4xl font-bold text-titleText mb-3">독서 기록의 새로운 시작</h2>
          <p className="text-xl text-text">Marginalia와 함께 당신의 독서 여정을 기록하세요</p>
        </div>
        <div className="max-w-md">
          <Button amount="one">시작하기</Button>
        </div>
      </section>

      {/* 오른쪽: 슬라이드 영역 */}
      <section className="relative flex-1 w-1/2 flex flex-col gap-4">
        {/* 슬라이드 */}
        <div className="relative flex-1 lg:h-150 lg:flex-none">
          {TEMPLATE_ITEMS.map(({ title1, title2, description, src, alt, id }, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={id}
                className={`absolute inset-0 flex flex-col items-center duration-700 ease-in-out 
              
                  ${
                  isActive
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                      ? 'opacity-0 -translate-x-full lg:translate-x-0'
                      : 'opacity-0 translate-x-full lg:translate-x-0'
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
              className={`w-10 h-2 rounded-full duration-300 ${
                index === currentSlide ? 'bg-text' : 'border border-text'
              }`}
              onClick={() => {
                setCurrentSlide(index);
                startAutoPlay();
              }}
            />
          ))}
        </div>

        {/* 모바일: 버튼 */}
        <div className="w-full lg:hidden">
          <Button amount="one">시작하기</Button>
        </div>
      </section>
      
    </div>
  );
}

export default OnBoard;
