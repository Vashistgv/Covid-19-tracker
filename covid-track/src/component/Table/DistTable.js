
import React from 'react';
import {Table, Tooltip} from 'antd' ; 

const columns = [
    {
        title: 'Distirct',
        dataIndex: 'dist',
        key: 'dist' ,
        ellipsis: true,
        render: (text) => <Tooltip title={text}> {text}</Tooltip>,
    sorter: (a, b) => a.dist.localeCompare(b.dist),
    },
    {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
        ellipsis: true,
        render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    sortOrder : ["descend"],
    sorter: (a, b) => a.active - b.active,
    },
    {
        title: 'Confirmed',
        dataIndex: 'confirmed',
        key: 'confirmed',
        ellipsis: true,
        responsive: ["md"],
    render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    },
    {
        title: "Recovered",
        dataIndex: "recovered",
        key: "recovered",
        responsive: ["md"],
        ellipsis: true,
        render(text) {
          return (
            <Tooltip title={text}>
              {" "}
              <span style={{ color: "green" }}>{text}</span>
            </Tooltip>
          );
        },
      },
      {
        title: "Deaths",
        dataIndex: "deceased",
        key: "deceased",
        responsive: ["md"],
        render(text) {
          return (
            <Tooltip title={text}>
              <span style={{ color: "red" }}>{text}</span>
            </Tooltip>
          );
        },
      },
      {
          title: "Zone",
          dataIndex: "zone",
          key: "zone",
          ellipsis: true,
          render(text){
              return(
                  <Tooltip title={text}>{text}</Tooltip>
              )
          }
      }
]



const DistTable = ({data , loading}) => { 

  return (
    <Table
     columns={columns}
        dataSource={data ? data : []}
        pagination={{ pageSize: 10 }}
        
        loading={loading}
      
    />

)
}


export default DistTable