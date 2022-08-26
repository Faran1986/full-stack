import React from "react";
import Menu from "../../menu";

const Sidebar = () => {
  return (
    <header id="page-header">
      <div className="sidebar">
        <button className="header-dots">
          <img src="assets/images/dots.svg" alt="logo" />
        </button>
        <div className="menu">
          <div className="close-menu"></div>
          <ul>
            {Menu.map((menuItem, index) => {
              return (
                <li key={index}>
                  <a className="menu-item" href={menuItem.target}>
                    {menuItem.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
