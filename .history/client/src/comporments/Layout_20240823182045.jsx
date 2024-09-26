import React from 'react'
import{Outlet} from "react-router-dom"

import App from './'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Header/>
         <Outlet/>
         <App/>
      <Footer/>
    </>
  )
}

export default Layout
