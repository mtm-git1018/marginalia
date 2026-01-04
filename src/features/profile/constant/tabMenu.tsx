import { FiUser } from "react-icons/fi";
import { SlGraph } from "react-icons/sl";
import { IoIosHelpCircleOutline } from "react-icons/io";

export const TAB_MENU = [
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
] as const