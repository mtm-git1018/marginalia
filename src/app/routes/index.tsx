import { Outlet } from "react-router"
import Header from "../layout/Header"

function Root() {
  return (
    <>
      <Header />
      <section className="mt-10 page-layout">
        <Outlet />
      </section>
    </>
  );
}
export default Root