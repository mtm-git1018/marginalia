import { useNavigate, useParams } from "react-router"
import { useUserProfile } from "../../shared/api/useUserData"
import { useAuth } from "../../shared/context/AuthContext"
import Button from "../../shared/components/button/Button"
import { FiUser } from "react-icons/fi";
import { SlGraph } from "react-icons/sl";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { supabase } from "../../shared/api/supabase";
import SEO from "@/shared/components/seo/SEO";

const TAB_MENU = [
  {
    tab: '프로필 수정',
    path: 'edit',
    icon: <FiUser />,
  },
  {
    tab: '통계',
    path: 'statics',
    icon: <SlGraph />,
  },
  {
    tab: '도움말',
    path: 'help',
    icon: <IoIosHelpCircleOutline />,
  },
];

function Profile() {
  const { id } = useParams()
  const { data } = useUserProfile(id ?? '')
  const { user } = useAuth()
  const navigate = useNavigate()
  const handleMovePath = (path:string) => {
    navigate(path)
  }
  const handleSignOut = () => {
    supabase.auth.signOut()
    navigate('/')
  }

  return (
    <div>
      <SEO
        title="프로필"
        description="내 독서 통계와 프로필 정보를 확인하세요"
        keywords="프로필, 독서 통계, 독서 분석"
      />
      <section className="flex flex-col items-center justify-center gap-3">
        <div className="h-30 w-30 rounded-full overflow-hidden">
          <img src={data?.profile_image ?? '/profile.webp'} alt="프로필 이미지" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lgaa font-semibold">{data?.nickname}</p>
          <p className="text-sm text-dustyBrown">{user?.email}</p>
        </div>
      </section>
      <section className="bg-white mt-10 rounded-lg flex flex-col gap-3">
        {TAB_MENU.map(({ icon, tab, path }) => (
          <button
            className="flex justify-between border-b px-5 py-4 border-softTan last:border-b-0"
            key={path}
            onClick={() => handleMovePath(path)}
          >
            <div className="flex items-center gap-2">
              <div>{icon}</div>
              <p>{tab}</p>
            </div>
            <span> &gt; </span>
          </button>
        ))}
      </section>

      <section className="mt-10">
        <Button variant="primary" onClick={handleSignOut}>
          로그아웃
        </Button>
      </section>
    </div>
  );
}
export default Profile