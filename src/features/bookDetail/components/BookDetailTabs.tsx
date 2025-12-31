import { useLocation, useNavigate } from "react-router";
import { TAB_MENU } from "../constant/TabMenu";

function BookDetailTabs() {
  const navigate = useNavigate()
  const location = useLocation()

  const activeTab = TAB_MENU.findIndex(({ path }) =>
    location.pathname.endsWith(path)
  )

  const handleTabClick = (path: string) => {
    navigate(path)
  }

  return (
    <ul className="flex gap-3 border-b mt-5">
      {TAB_MENU.map(({ tab, path }, index) => {
        const isActive = activeTab === index;
        return (
          <li
            key={path}
            className={
              isActive
                ? 'font-bold text-titleText border-b cursor-pointer'
                : 'font-normal cursor-pointer'
            }
            onClick={() => handleTabClick(path)}
          >
            {tab}
          </li>
        );
      })}
    </ul>
  );
}
export default BookDetailTabs