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
         {path: "register", element: <Register/>},
         {path: "login", element: <Login />},
         {path: "create", element: <Logout/>},
         {path: "Authors", element: <UserProfile />},
         {path: "create", element: <Authors />},
         {path: "Authors", element: <CreatePost />},
         {path: "create", element: <CategoryPost />},
         {path: "Authors", element: <AuthorPost />},
         {path: "create", element: <DashBoard />},
         {path: "Authors", element: <EditPost />},
     
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

