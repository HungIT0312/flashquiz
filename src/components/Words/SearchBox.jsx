import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Divider, Input, Space } from "antd";
import React from "react";
import en from "../../assets/images/en-circle.png";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const onChangeInput = (keyword) => {
    props.onInput(keyword);
  };
  return (
    <Space wrap className="search font">
      <Input
        className="search__box font"
        size="large"
        placeholder="SEARCH FOR A WORD"
        prefix={<SearchOutlined size={28} style={{ paddingRight: "8px" }} />}
        style={{
          backgroundColor: "transparent",
        }}
        onChange={(e) => onChangeInput(e.target.value)}
      ></Input>
      <Space className="language fontmain">
        <span className="fontmain">EN</span>

        <Divider
          type="vertical"
          style={{
            backgroundColor: "#ccc",
            margin: 0,
            height: "28px",
          }}
          className=""
        ></Divider>
        <Avatar src={en} className="language__flag"></Avatar>
      </Space>
    </Space>
  );
};

export default SearchBox;
