import { Link } from "react-router";
import { TEMPLATE_ITEMS } from "../constant/templateItem";
import Template from "./Template";
import Button from "@/shared/components/button/Button";
import useAutoPlay from "../hooks/useAutoPlay";
import SlideIndicator from "./SlideIndicator";

function OnboardSlider() {

  const { currentSlide, goToSlide } = useAutoPlay();

  return (
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
      <SlideIndicator
        totalSlides={TEMPLATE_ITEMS.length}
        currentSlide={currentSlide} goToSlide={goToSlide} />

      {/* 모바일 버튼 */}
      <div className="w-full lg:hidden">
        <Link to="/login">
          <Button variant="primary">시작하기</Button>
        </Link>
      </div>
    </section>
  );
}
export default OnboardSlider