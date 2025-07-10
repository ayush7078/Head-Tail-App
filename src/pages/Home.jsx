import React from "react";
import { Typography, Button, Space } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Home = () => {
  return (
    <div style={{ padding: 30 }}>
      <Title>Home Page</Title>
      <Space>
        <Link to="/about">
          <Button type="primary">About</Button>
        </Link>
        <Link to="/head-tail">
          <Button type="default">Head & Tail</Button>
        </Link>
      </Space>
    </div>
  );
};

export default Home;
