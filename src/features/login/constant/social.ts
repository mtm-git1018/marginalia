import kakao from '@/shared/asset/icons/kakao.webp';
import google from '@/shared/asset/icons/google.webp';
import { googleLogin, kakaoLogin } from '../api/socialLogins';


export const SOCIALS = [
  {
    id: 0,
    title: '카카오',
    src: kakao,
    color: 'bg-[#FAE100]',
    onClick: kakaoLogin,
  },
  {
    id: 1,
    title: '구글',
    src: google,
    color: 'bg-[#fff]',
    onClick: googleLogin,
  },
] as const
