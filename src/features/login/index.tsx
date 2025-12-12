import naver from '@/shared/asset/icons/naver.webp'
import kakao from '@/shared/asset/icons/kakao.webp'
import google from '@/shared/asset/icons/google.webp';
import SocialLoginBtn from './components/SocialLoginBtn';
import { auth } from '../../shared/api/firebase';

import { getAdditionalUserInfo, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router';



function Login() {
  const navigate = useNavigate()
  const SOCIALS = [
    {
      id: 1,
      title: '네이버',
      src: naver,
      color: 'bg-[#00C73C] text-white',
    },
    {
      id: 2,
      title: '카카오',
      src: kakao,
      color: 'bg-[#FAE100]',
    },
    {
      id: 3,
      title: '구글',
      src: google,
      color: 'bg-[#fff]',
      onClick: async() => {
            const provider = new GoogleAuthProvider();
            try {
              const result = await signInWithPopup(auth, provider);
              const user = result.user;
              const additiionalUserInfo = getAdditionalUserInfo(result)
              if (additiionalUserInfo) {
                await navigate('/settings')
              } else {
              await navigate(`/${user.uid}`);
              }
            } catch (err) {
              console.error('Google 로그인 오류', err);
            }
      }
    },
  ];

 


  return (
    <div className="flex flex-col justify-between py-6 mx-auto max-w-1024 w-full">
      <span className="flex flex-col items-center gap-4">
        <h2 className="text-center w-82 h-27">
          <img src="/logo-dark-brown.webp" alt="로고" className='object-cover w-full h-full'/>
        </h2>
        <p className="text-center">
          회원가입 절차없이 <br /> 빠르고 간편하게 로그인하세요
        </p>
      </span>

      <span className="flex flex-col mt-8">
        <ul className="flex flex-col gap-6">
          {SOCIALS.map(({ id, title, src, color,onClick }) => (
            <li key={id} className="flex-center font-semibold">
              <SocialLoginBtn title={title} src={src} color={color}
              onClick={onClick}
        />
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
}
export default Login