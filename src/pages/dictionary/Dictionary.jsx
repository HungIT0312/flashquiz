import { Col, Row, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import SearchBox from "../../components/Words/SearchBox";
import Result from "../../components/card/result";
import "./Dictionary.scss";
import { useNavigate } from "react-router-dom";
import Phonetic from "../../components/Words/Phonetic";
const Dictionary = () => {
  const [keyword, setKeyword] = useState("");
  const [isSelected, setIsSelected] = useState(true);
  const navigate = useNavigate();
  const handleInput = (key) => {
    setIsSelected(!key);
    setKeyword(key);
  };
  const handleSelectWord = (word) => {
    setIsSelected(true);
    navigate(`/dictionary?entry=${word}`);
  };
  return (
    <Content className="contentdic">
      <SearchBox onInput={handleInput} />
      {isSelected ? (
        <Space>
          <Phonetic />
        </Space>
      ) : (
        <Space>
          <Row gutter={[32, 16]}>
            <Col span={12}>
              <Result
                word={keyword}
                index={"1"}
                definition={
                  "a word that i give to test my front  end a word that i give to test my front enda word that i give to test my front enda word that i give to test my front enda word that i give to test my front enda word that i give to test my front enda word that i give to test my front end"
                }
                onSelect={handleSelectWord}
              />
            </Col>
            <Col span={12}>
              <Result
                word={keyword}
                index={"1"}
                definition={"a word that i give to test my front end"}
                onSelect={handleSelectWord}
              />
            </Col>
            <Col span={12}>
              <Result
                word={keyword}
                index={"1"}
                definition={"a word that i give to test my front end"}
                onSelect={handleSelectWord}
              />
            </Col>
          </Row>
        </Space>
      )}
    </Content>
  );
};

export default Dictionary;
