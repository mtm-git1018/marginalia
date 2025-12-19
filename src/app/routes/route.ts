import { createBrowserRouter } from "react-router";
import Root from ".";
import OnBoard from "../../features/onboard";
import Login from "../../features/login";
import Main from "../../features/main";
import Study from "../../features/study";
import AddBook from "../../features/addBook";
import SettingProfile from "../../features/setting";
import Callback from "../../features/login/components/Callback";
import BookDetail from "../../features/bookDetail";
import BookReport from "../../features/bookDetail/components/BookReport";
import BookQuotes from "../../features/bookDetail/components/BookQuotes";
import Profile from "../../features/profile";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: OnBoard,
      },
      {
        path: 'auth/callback',
        Component: Callback,
      },
      {
        path: '/settings',
        Component: SettingProfile,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: ':id',
        Component: Main,
      },
      {
        path: ':id/profile',
        Component:Profile
      },
      {
        path: ':id/addbook',
        Component: AddBook,
      },
      {
        path: ':id/study',
        Component: Study,
      },
      {
        path: ':id/study/:book_id',
        Component: BookDetail,
        children: [
          {
            index: true,
            Component:BookReport
          },
          {
            path:'review',
            Component:BookReport
          },
          {
            path: 'quotes',
            Component:BookQuotes
          }
        ]
      },
    ],
  },
]);