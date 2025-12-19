import { useAuth } from '../../shared/context/AuthContext';
import { useNavigate, useParams } from 'react-router';
import { useUserProfile } from '../../shared/api/useUserData';

function Header() {
  const user = useAuth()
  const {id}= useParams()
  const navigate = useNavigate()
  const { data } = useUserProfile(id ?? '')
  
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
          <img src="/logo.webp" alt="로고 이미지" className="h-8 w-auto" />
        </a>
      </h1>
      <button
        type="button"
        aria-label="메뉴 열기"
        aria-expanded="false"
        aria-controls="navigate-menu"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <a href={`${id}/profile`}>
            <img src={data?.profile_image?.trim() ?? '/profile.webp'} alt={data?.nickname} />
          </a>
        </div>
      </button>
    </header>
  );
}
export default Header