import { createBrowserRouter, RouterProvider } from 'react-router';
import Index from '../pages/index/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
