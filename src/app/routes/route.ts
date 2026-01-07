import { createBrowserRouter, redirect } from 'react-router';
import Root from '.';
import OnBoard from '../../features/onboard';
import Login from '../../features/login';
import Callback from '../../features/login/components/Callback';
import { lazy } from 'react';


const Main = lazy(() => import('../../features/main'));
const Study = lazy(() => import('../../features/study'));
const AddBook = lazy(() => import('../../features/addBook'));
const Profile = lazy(() => import('../../features/profile'));
const BookReport = lazy(() => import('../../features/bookDetail/components/review/BookReport'));
const BookQuotes = lazy(() => import('../../features/bookDetail/components/quote/BookQuotes'));
const BookDetail = lazy(() => import('../../features/bookDetail'));
const SettingProfile = lazy(() => import('../../features/setting'));
const Statics = lazy(() => import('../../features/profile/components/static/Statics'));
const EditProfile = lazy(() => import('../../features/profile/components/EditProfile'));
const Help = lazy(() => import('../../features/profile/components/Help'));
const Timer = lazy (() => import('@/features/timer'))


export const router = createBrowserRouter([
  {
    path: '/onboard',
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
    path: '/',
    Component: Root,
    children: [
      {
        path: ':id',
        Component: Main,
      },
      {
        path: ':id/profile',
        Component: Profile,
      },
      {
        path: ':id/profile/edit',
        Component: EditProfile,
      },
      {
        path: ':id/profile/statics',
        Component: Statics,
      },
      {
        path: ':id/profile/help',
        Component: Help,
      },
      {
        path: ':id/addbook',
        Component: AddBook,
      },
      {
        path: ':id/timer',
        Component:Timer,
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
            loader: () => redirect('review')
          },
          {
            path: 'review',
            Component: BookReport,
          },
          {
            path: 'quotes',
            Component: BookQuotes,
          },
        ],
      },
    ],
  },
]);
