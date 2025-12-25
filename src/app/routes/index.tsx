import { Outlet } from "react-router"
import Header from "../layout/Header"
import { Suspense } from "react";
import LoadingSpinner from "../../shared/components/loading/LoadingSpinner";


function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col px-5 py-3 ">
        <Suspense
          fallback={
            <div className="h-full flex-center">
              <LoadingSpinner />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
export default Root