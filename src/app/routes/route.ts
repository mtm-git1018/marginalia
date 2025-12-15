import { createBrowserRouter } from "react-router";
import Root from ".";
import OnBoard from "../../features/onboard";
import Login from "../../features/login";
import Main from "../../features/main";
import Study from "../../features/study";
import AddBook from "../../features/addBook";
import SettingProfile from "../../features/setting";
import Callback from "../../features/login/components/Callback";

export const router = createBrowserRouter([{
  path: '/',
  Component: Root,
  children: [{
    index: true,
      Component:OnBoard
  },
    {
      path: 'auth/callback',
      Component:Callback
    },
    {
      path: 'login',
      Component:Login
    },
    {
      path: ':id',
      Component: Main,
    },
    {
      path: ':id/study',
      Component:Study
    }, {
      path: ':id/addbook',
      Component:AddBook
    }, {
      path: '/settings',
      Component:SettingProfile
    }]
}])