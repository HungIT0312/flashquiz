import { Col, Layout, Row, Space } from "antd";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { Content } from "antd/es/layout/layout";
import SearchBox from "../../components/Words/SearchBox";
import "./Dictionary.scss";
import Result from "../../components/card/result";
import Footer from "../../components/footer/Footer";
const Dictionary = () => {
  const [keyword, setKeyword] = useState("");
  const handleInput = (key) => {
    console.log(key);
    setKeyword(key);
  };
  const handleSelectWord = (word) => {
    console.log("Ok roi nha");
  };
  return (
    <Layout className="dictionary">
      <Header />
      <Content className="contentdic">
        <SearchBox onInput={handleInput} />
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
      </Content>
      <Footer />
    </Layout>
  );
};

export default Dictionary;
