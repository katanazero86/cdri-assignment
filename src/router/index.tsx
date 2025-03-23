import { createBrowserRouter, RouterProvider } from 'react-router';
import Index from '../pages/index/Index';
import Layout from '../components/layout/Layout.tsx';
import WishList from '../pages/wishList/WishList.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: 'wish-list',
        element: <WishList />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
