import { Space } from "antd";
import React from "react";
import "./Vocabulary.scss";
const Vocabulary = () => {
  return (
    <Space className="wrap">
      <Space className="vocab" wrap direction="vertical">
        <div className="vocab__title">English Vocabulary</div>
        <div className="vocab__intro">Categorized word lists</div>
      </Space>
      <hr />
      <Space></Space>
    </Space>
  );
};

export default Vocabulary;
