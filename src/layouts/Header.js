import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header data-html2canvas-ignore>
      <div className="menu-container">
        <NavLink to={'/'} className="logo">
          <img src="images/tvf_logo.png" alt="" />
        </NavLink>
        <div className="hamburger-menu">
          <div className="bar"></div>
        </div>
        <div className="botHd">
          <a className="btnSearch" href="/tim-kiem"></a>
          <p>
            <a href="/en">EN</a><em>|</em><span>VN</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
