import React from "react";
import { Table, Tooltip, Tag, Space } from "antd";

const CovidTable = ({ data, loading, onStateClicked }) => {
  const onClick = (text) => {
    console.log("thsi sjsijfks ", text);
  };

  const columns = [
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      render: (text) => (
        <Tooltip title={text}>
          {" "}
          <a onClick={() => onStateClicked(text)}>{text}</a>
        </Tooltip>
      ),
      sorter: (a, b) => a.state.localeCompare(b.state),

      ellipsis: true,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      ellipsis: true,
      render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    },
    {
      title: "Confirmed",
      dataIndex: "confirmed",
      key: "confirmed",
      ellipsis: true,
      render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    },
    {
      title: "Recovered",
      dataIndex: "recovered",
      key: "recovered",
      ellipsis: true,
      render: (text) => (
        <Tooltip title={text}>
          <span style={{ color: "green" }}>{text}</span>
        </Tooltip>
      ),
    },
    {
      title: "Deaths",
      dataIndex: "deaths",
      key: "deaths",
      responsive: ["md"],
      render: (text) => (
        <Tooltip title={text}>
          <span style={{ color: "red" }}>{text}</span>
        </Tooltip>
      ),
    },
    {
      title: "lastupdatedtime",
      dataIndex: "lastupdatedtime",
      key: "lastupdatedtime",
      ellipsis: true,
      render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      loading={loading}
    />
  );
};

export default CovidTable;
