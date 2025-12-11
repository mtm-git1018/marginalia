import { Outlet } from "react-router"
import Header from "../layout/Header"

function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col px-5 py-3">
        <Outlet />
      </main>
    </div>
  );
}
export default Root