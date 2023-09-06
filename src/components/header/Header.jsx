import { Avatar, Space } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  //   const { pathname } = useLocation();

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Vocabulary",
      href: "/",
    },
    {
      label: "Grammar",
      href: "/",
    },
    {
      label: "Dictionary",
      href: "/",
    },
  ];
  const navItems = links.map((item, index) => {
    return (
      <div key={index} className="nav__item">
        <Link className={`nav__item-content `} to={item.href}>
          {item.label}
        </Link>
      </div>
    );
  });
  return (
    <Space className="menu">
      <Space className="nav">{navItems}</Space>
      <Space className="login">
        Nguyen Hung
        <Avatar
          size="large"
          style={{
            backgroundColor: "#fde3cf",
            color: "#f56a00",
          }}
        >
          H
        </Avatar>
      </Space>
    </Space>
  );
};

export default Header;
