import { Outlet, useParams } from "react-router"
import Header from "../layout/Header"
import LoadingSpinner from "../../shared/components/loading/LoadingSpinner";
import { useUserProfile } from "../../shared/api/useUserData";
import type { UserProfile } from "../../shared/types/type";
export interface RootOutletContext {
  userProfile: UserProfile;
}

function Root() {

  const params = useParams()
  const uid = params.id ?? ''
  const {data:userProfile,isLoading} = useUserProfile(uid)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col px-5 py-3 ">
        {isLoading ? (
          <div className="h-full flex-center">
            <LoadingSpinner/>
          </div>
        ) : (
            <Outlet context={{ userProfile:userProfile }} />
        )}
      </main>
    </div>
  );
}
export default Root