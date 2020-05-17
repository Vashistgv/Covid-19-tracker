
import React from 'react';
import {Table} from 'antd' ; 

const columns = [
    {
        title: 'Distirct',
        dataIndex: 'dist',
        key: 'dist' ,
        ellipsis: true,
    },
    {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
        ellipsis: true,
    },
    {
        title: 'Confirmed',
        dataIndex: 'confirmed',
        key: 'confirmed',
        ellipsis: true,

    },
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