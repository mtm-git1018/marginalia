import { Outlet } from "react-router"
import Header from "../layout/Header"

function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1 page-layout flex flex-col py-6">
        <Outlet />
      </section>
    </div>
  );
}
export default Root