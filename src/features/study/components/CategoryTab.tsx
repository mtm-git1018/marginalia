import { CATEGORY_TAB } from "../constant/categoryTabs";

interface Props{
  activeTab: number,
  onTabChange: (index:number) => void
}

function CategoryTab({ activeTab,onTabChange}:Props) {

  return (
    <ul className="flex gap-3 border-b mt-5">
      {CATEGORY_TAB.map(({ tab }, index) => {
        const isActive = activeTab === index;
        return (
          <li
            key={tab}
            className={
              `duration-100
              ${isActive
                ? 'font-bold text-titleText border-b cursor-pointer'
                : 'font-normal cursor-pointer'
              }`}
            onClick={() => onTabChange(index)}
          >
            {tab}
          </li>
        );
      })}
    </ul>
  );
}
export default CategoryTab