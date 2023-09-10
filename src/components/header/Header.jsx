import { BookOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Image, Popover, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logoMain.png";
import "./Header.scss";
const Header = () => {
  const { pathname } = useLocation();
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
      href: "/home",
    },
    {
      label: "Vocabulary",
      href: "/vocabulary",
    },

    {
      label: "Dictionary",
      href: "/dictionary",
    },
  ];
  const navItems = links.map((item, index) => {
    return (
      <div key={index} className="nav__item ">
        <Link
          className={`nav__item-content ${
            pathname === item.href ? "active" : ""
          }`}
          to={item.href}
        >
          {item.label}
        </Link>
      </div>
    );
  });

  const content = (
    <Space direction="vertical" className="options">
      <Space className="options__item">
        <BookOutlined className="options__icon" />
        <span className="options__label">Word List</span>
      </Space>
      <Space className="options__item ">
        <UserOutlined className="options__icon" />
        <span className="options__label">Profile</span>
      </Space>
      <hr
        style={{
          padding: "0px",
          margin: "0px",
          color: "#ccc",
          backgroundColor: "#ccc",
        }}
      />
      <Space className="options__item sign_out">
        <LogoutOutlined className="options__icon" />
        <span className="options__label">Sign Out</span>
      </Space>
    </Space>
  );
  return (
    <Space className={`menu ${isScroll ? "menu__scrolled" : ""}`}>
      <Space className="nav">
        <Image src={logo} preview={false} width={48}></Image>
        {navItems}
      </Space>
      <Popover placement="bottom" trigger="click" content={content}>
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
      </Popover>
    </Space>
  );
};

export default Header;
