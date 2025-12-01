import { createBrowserRouter } from "react-router";
import Root from ".";
import OnBoard from "../../features/onboard";

export const router = createBrowserRouter([{
  path: '/',
  Component: Root,
  children: [{
    index: true,
    Component:OnBoard
  }]
}])