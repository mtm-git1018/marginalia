import { useEffect, useRef, useState } from 'react';
import { TEMPLATE_ITEMS } from '../constant/templateItem';

function useAutoPlay() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoplayRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TEMPLATE_ITEMS.length);
    }, 3000);
  };
  const goToSlide = (index:number) => {
    setCurrentSlide(index);
    startAutoPlay()
  }
  
    useEffect(() => {
      startAutoPlay();
      return () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      };
    }, []);

  return {currentSlide,goToSlide}
}
export default useAutoPlay;
