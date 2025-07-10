import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: 30 }}>
      <Title>About Page</Title>
      <Paragraph>
        This is a simple About page using Ant Design Typography components.
      </Paragraph>
    </div>
  );
};

export default About;
