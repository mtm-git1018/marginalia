import naver from '@/shared/asset/icons/naver.webp'
import kakao from '@/shared/asset/icons/kakao.webp'
import google from '@/shared/asset/icons/google.webp';
import SocialLoginBtn from './components/SocialLoginBtn';

function Login() {
  const SOCIALS = [
    {
      id: 1,
      title: '네이버',
      src: naver,
      color: 'bg-[#00C73C]',
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
      color:'bg-[#fff]'
    },
  ];


  return (
    <div className="flex flex-col justify-between py-6">
      <span className="flex flex-col gap-4">
        <h2 className="text-center">Marginalia</h2>
        <p className="text-center">
          회원가입 절차없이 <br /> 빠르고 간편하게 로그인하세요
        </p>
      </span>

      <span className='flex flex-col mt-8'>
        <ul className="flex flex-col gap-6">
          {SOCIALS.map(({ id, title, src, color }) => (
            <li key={id} className="flex-center">
              <SocialLoginBtn title={title} src={src} color={color} />
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
}
export default Login