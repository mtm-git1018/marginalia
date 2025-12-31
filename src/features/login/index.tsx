import SEO from '@/shared/components/seo/SEO';
import LoginBtnWrap from './components/LoginBtnWrap';

function Login() {

  return (
    <>
      <SEO
        title="로그인"
        description="회원가입 절차 없이 소셜 로그인으로 빠르고 간편하게 시작하세요. 카카오, 구글계정으로 로그인 할 수 있습니다."
        keywords="로그인, 소셜 로그인, 카카오 로그인, 구글 로그인, 간편 로그인"
      />
      <div className="flex flex-col flex-center h-full py-6 mx-auto max-w-375 lg:max-w-1024 ">
        <span className="flex flex-col items-center gap-4">
          <h1 className="text-center w-82 h-27" aria-label='마지나리아 로고'>
            <img src="/logo-dark-brown.webp" alt="로고"
            loading='eager' fetchPriority='high'  className="object-cover w-full h-full" />
          </h1>
          <p className="text-center">
            회원가입 절차없이 <br /> 빠르고 간편하게 로그인하세요
          </p>
        </span>

        <span className="flex flex-col mt-8 w-full">
          <LoginBtnWrap/>
        </span>
      </div>
    </>
  );
}
export default Login