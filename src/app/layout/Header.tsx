
import { RxHamburgerMenu } from 'react-icons/rx';
function Header() {
  return (
    <header className="h-14 w-full px-5 py-3 bg-deepBrown flex justify-between items-center">
      <h1>
        <a href="/" aria-label="Maginalia 홈으로 이동">
          <img src="/logo.webp" alt="로고 이미지" className="h-8 w-auto" />
        </a>
      </h1>
      <button
        type="button"
        aria-label="메뉴 열기"
        aria-expanded="false"
        aria-controls="navigate-menu"
      >
        <RxHamburgerMenu size={24} aria-hidden="true" color="#F1F2EF"  />
      </button>
    </header>
  );
}
export default Header