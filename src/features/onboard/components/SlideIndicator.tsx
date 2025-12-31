interface Props{
  totalSlides: number,
  currentSlide: number,
  goToSlide:(index:number) => void
}

function SlideIndicator({ totalSlides,currentSlide,goToSlide}:Props) {
  return (
    <div className="flex gap-2 justify-center" role="tablist" aria-label="슬라이드 선택">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          role="tab"
          aria-label={`${index + 1}번째 슬라이드로 이동`}
          aria-current={index === currentSlide ? 'true' : 'false'}
          className={`w-10 h-2 rounded-full transition-all duration-300 ${
            index === currentSlide ? 'bg-warmBrown' : 'border border-softTan'
          }`}
          onClick={() => goToSlide(index)}
        />
      ))}
    </div>
  );
}
export default SlideIndicator