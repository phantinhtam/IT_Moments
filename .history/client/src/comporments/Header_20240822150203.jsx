 import React from 'react'
 import { Link } from 'react-router-dom'
 
 const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          {/* Nếu có logo, hãy thêm URL hình ảnh vào đây */}
          <img src="" alt="Logo"/>
        </Link>

        <ul className="nav__menu">
          <li><Link to="/profile">Trang Chủ</Link></li>
          <li><Link to="/create">Thứ năm, ngày 22/08/2024 02:52:47 GMT +7</Link></li>
        
        </ul>
      </div>
    </nav>
  )
}

export default Header
 