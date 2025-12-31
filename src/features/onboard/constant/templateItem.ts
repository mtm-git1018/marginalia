import image1 from '@/shared/asset/welcomeimage1.webp';
import image2 from '@/shared/asset/welcomeimage2.webp';
import image3 from '@/shared/asset/welcomeimage3.webp';

export const TEMPLATE_ITEMS = [
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
] as const
