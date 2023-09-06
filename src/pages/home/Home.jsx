import { Button, Image, Layout, Space } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import React from "react";
import Header from "../../components/header/Header";
import "./Home.scss";
import backGround from "../../assets/images/background.png";
const Home = () => {
  return (
    <Layout className="home">
      <Header />
      <Content className="main">
        <Space className="content">
          <Space className="introduce" direction="vertical">
            <Space className="introduce__title">Learn with MyTeam</Space>
            <Space className="introduce__paragraph">
              FlashQuiz is a language learning platform that helps you learn
              easier, faster and smarter.
            </Space>
            <Space className="introduce__btn" wrap>
              <Button type="primary" className="btn btn__pri">
                Vocabulary
              </Button>
              <Button className="btn btn__sec">Grammar</Button>
            </Space>
          </Space>
          <Image className="image" src={backGround} preview={false}></Image>
        </Space>
        <Space className="content bg-second">
          <Space></Space>
        </Space>
        <Space className="content">
          <Space></Space>
        </Space>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
