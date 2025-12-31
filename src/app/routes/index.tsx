import { Navigate, Outlet, useLocation, useParams } from "react-router"
import Header from "../layout/Header"
import LoadingSpinner from "../../shared/components/loading/LoadingSpinner";
import { useUserProfile } from "../../shared/api/useUserData";
import type { UserProfile } from "../../shared/types/type";
import { useAuth } from "@/shared/context/AuthContext";

export interface RootOutletContext {
  userProfile: UserProfile;
}

function Root() {

  const { user, loading } = useAuth()
  const location = useLocation()
  const params = useParams()
  const uid = params.id ?? ''
  const {data:userProfile,isLoading} = useUserProfile(uid)

  if (loading) {
    return (
      <div className="h-full flex-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return <Navigate to='/onboard' replace/>
  }

  if (location.pathname === '/') {
    return <Navigate to={`/${user.id}`} replace />;
  }


    return (
      <div className="flex flex-col items-center min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col px-5 py-3 max-w-1024 w-full">
          {isLoading ? (
            <div className="h-full flex-center">
              <LoadingSpinner />
            </div>
          ) : (
            <Outlet context={{ userProfile: userProfile }} />
          )}
        </main>
      </div>
    );
}
export default Root