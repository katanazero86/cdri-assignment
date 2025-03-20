import { createBrowserRouter, RouterProvider } from 'react-router';
import Index from '../pages/index/Index';
import Layout from '../components/layout/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
