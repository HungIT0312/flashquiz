import { Avatar, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  //   const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 630) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <Space className={`menu ${isScroll ? "menu__scrolled" : ""}`}>
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
