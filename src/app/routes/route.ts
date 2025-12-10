import { createBrowserRouter } from "react-router";
import Root from ".";
import OnBoard from "../../features/onboard";
import Login from "../../features/login";
import Main from "../../features/main";
import Study from "../../features/study";
import AddBook from "../../features/addBook";

export const router = createBrowserRouter([{
  path: '/',
  Component: Root,
  children: [{
    index: true,
      Component:OnBoard
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
      path: '/addbook',
      Component:AddBook
    }]
}])