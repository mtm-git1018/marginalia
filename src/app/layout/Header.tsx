import { useAuth } from '../../shared/context/AuthContext';
import { useNavigate } from 'react-router';
import { useUserProfile } from '../../shared/api/useUserData';

function Header() {
  const { user } = useAuth()
  
  const navigate = useNavigate()
  const { data } = useUserProfile(user?.id ?? '')

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (user) {
      navigate(`${user.id}`, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <header className="h-14 w-full px-5 py-3 bg-deepBrown flex justify-between items-center">
      <h1>
        <a href="/" onClick={handleLogoClick} aria-label="Maginalia 홈으로 이동">
          <img src="/logo_200x64.webp" alt="로고 이미지" className="h-8 w-auto" />
        </a>
      </h1>
      <button
        type="button"
        aria-label="메뉴 열기"
        aria-expanded="false"
        aria-controls="navigate-menu"
      >
        {user && (
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <a href={`/${user.id}/profile`}>
              <img
                src={data ? data.profile_image?.trim() : '/profile_64x64.webp'}
                alt={data?.nickname}
              />
            </a>
          </div>
        ) }
      </button>
    </header>
  );
}
export default Header