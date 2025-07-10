import React, { useState } from "react";
import { Select, Button, Typography, Row, Col, message } from "antd";

const { Option } = Select;
const { Title } = Typography;

const HeadTail = () => {
  const [selectedValue, setSelectedValue] = useState(undefined);
  const [columns, setColumns] = useState([]); // array of { key: 'H' or 'T', values: ['H', 'H', ...] }

  const handleSubmit = () => {
    if (!selectedValue) {
      message.error("Please select value from dropdown");
      return;
    }

    const lastColumn = columns[columns.length - 1];

    let newColumns = [...columns];

    if (lastColumn && lastColumn.key === selectedValue) {
      // If last column is same as current value, push it into that column
      newColumns[newColumns.length - 1].values.push(selectedValue);
    } else {
      // Else create a new column
      newColumns.push({ key: selectedValue, values: [selectedValue] });
    }

    setColumns(newColumns);
    setSelectedValue(undefined); // reset dropdown
  };

  return (
    <div style={{ padding: "30px" }}>
      <Title level={2}>Head & Tail Page</Title>

      <Row gutter={16} align="middle" style={{ marginBottom: "20px" }}>
        <Col>
          <Select
            value={selectedValue}
            onChange={(val) => setSelectedValue(val)}
            placeholder="Select Value"
            style={{ width: 160 }}
          >
            <Option value="H">H</Option>
            <Option value="T">T</Option>
          </Select>
        </Col>
        <Col>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>

      <Row gutter={24} align="top">
        {columns.map((col, colIndex) => (
          <Col key={colIndex}>
            {col.values.map((val, valIndex) => (
              <div key={valIndex}>{val}</div>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HeadTail;
