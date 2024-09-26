import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import './slide.css';
import './IG/leftSide.css'
import Layout from './comporments/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Create from './pages/Create'
import Authors from './pages/Authors'
import PostDetail1 from './pages/Post_Detail1';
import App from './IG/App';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement: <ErrorPage/>,
    children: [
         {index: true, element: <Home /> },
         {path: "posts/:id", element: <PostDetail />},
         {path: "post/:id", element: <PostDetail1 />},
         {path: "authors", element: <Authors />},
         {path: "create", element: <Create />},
  
  
     
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

