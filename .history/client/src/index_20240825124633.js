import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './comporments/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Create from './pages/Create'
import Authors from './pages/Authors'



const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement: <ErrorPage/>,
    children: [
         {index: true, element: <Home /> },
         {path: "posts/:id", element: <PostDetail />},
         {}
         {path: "create", element: <Authors />},
         {path: "Authors", element: <Authors />},
         {path: "create", element: <Create />},
         {path: "Authors", element: <Authors />},
     
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

