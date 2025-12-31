import kakao from '@/shared/asset/icons/kakao.webp'
import google from '@/shared/asset/icons/google.webp';
import SocialLoginBtn from './components/SocialLoginBtn';
import { googleLogin, kakaoLogin } from './api/socialLogins';

function Login() {
  
  const SOCIALS = [
    {
      id: 2,
      title: '카카오',
      src: kakao,
      color: 'bg-[#FAE100]',
      onClick:kakaoLogin
    },
    {
      id: 3,
      title: '구글',
      src: google,
      color: 'bg-[#fff]',
      onClick:googleLogin
    }
  ];

  return (
    <div className="flex flex-col flex-center h-full py-6 mx-auto max-w-1024 ">
      <span className="flex flex-col items-center gap-4">
        <h2 className="text-center w-82 h-27">
          <img src="/logo-dark-brown.webp" alt="로고" className='object-cover w-full h-full'/>
        </h2>
        <p className="text-center">
          회원가입 절차없이 <br /> 빠르고 간편하게 로그인하세요
        </p>
      </span>

      <span className="flex flex-col mt-8 w-full">
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