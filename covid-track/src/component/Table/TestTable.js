import React from "react";
import { Table, Tooltip } from "antd";
import "./TestTable.scss";

const columns = [
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    ellipsis: true,
    render: (text) => (
      <Tooltip title={text}>
        {" "}
        <a>{text}</a>
      </Tooltip>
    ),
    onClick: (e) => e.target.text,
    sorter: (a, b) => a.state.localeCompare(b.state),
  },
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
    ellipsis: true,
    render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    sorter: (a, b) => a.active - b.active,
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
    render(text) {
      return (
        <Tooltip title={text}>
          {" "}
          <span style={{ color: "green", fontWeight: "bold" }}>{text}</span>
        </Tooltip>
      );
    },
  },
  {
    title: "Deaths",
    dataIndex: "deaths",
    key: "deaths",
    responsive: ["md"],
    render(text) {
      return (
        <Tooltip title={text}>
          <span style={{ color: "red", fontWeight: "bold" }}>{text}</span>
        </Tooltip>
      );
    },
    filters: [
      {
        text: ">1000",
        value: ">1000",
      },
      {
        text: "<1000",
        value: "<1000",
      },
    ],
    // onFilter: (text, record) => record.text.value === 1000
  },
  {
    title: "lastupdatedtime",
    dataIndex: "lastupdatedtime",
    key: "lastupdatedtime",
    ellipsis: true,
    render: (text) => <Tooltip title={text}>{text}</Tooltip>,
  },
];

const TestTable = ({ data }) => {
  return (
    <div className="tablecss">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10, responsive: true }}
        scroll={{ y: 384 }}
      />
    </div>
  );
};

export default TestTable;
