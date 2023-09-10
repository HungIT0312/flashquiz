import { Avatar, Space } from "antd";
import React from "react";
import "./Meaning.scss";
import {
  BookOutlined,
  InboxOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
const Meaning = (props) => {
  return (
    <Space className="wrappered border border--lightblue" direction="vertical">
      <Space style={{ borderBottom: "1px solid #ccc", width: "100vh" }}>
        <h1>Meaning</h1>
      </Space>
      <Space className="meaning">
        <span className="meaning__content">
          <span className="meaning__content--num">1.</span> a tropical fruit
          with a sweet and juicy flesh, similar to a lychee, and it is native to
          Southeast Asia
        </span>
      </Space>
      <Space className="synonyms"></Space>
      <Space className="choice">
        <div className="choice__item">
          <InboxOutlined className="choice__icon" />
          <PlusCircleFilled className="choice__icon--sub" />
        </div>
        <div className="choice__item">
          <BookOutlined className="choice__icon" />
          <PlusCircleFilled className="choice__icon--sub" />
        </div>
      </Space>
    </Space>
  );
};

export default Meaning;
