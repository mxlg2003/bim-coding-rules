import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import {
  CopyrightCircleOutlined
} from "@ant-design/icons";
import FrameNav from "./components/FrameNav";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <>
      <FrameNav />
      <Layout className="layout-content">
        <Sider theme="light">left sidebar</Sider>
        <Layout>
          <Content>main content</Content>
          <Footer style={{ textAlign: "center" }}>
            Copyright <CopyrightCircleOutlined /> 2020 安徽贝慕信息科技出品
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
