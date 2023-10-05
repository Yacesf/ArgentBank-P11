import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import MainPage from './pages/MainPage/MainPage';
import SignInPage from './pages/SignInPage/SignInPage';
import UserPage from './pages/UserPage/UserPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: (
      <div>
        Error 404
      </div>
    ),
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
    errorElement: (
      <div>
        Error 404
      </div>
    ),
  },
  {
    path: "/user",
    element: <UserPage />,
    errorElement: (
      <div>
        Error 404
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
