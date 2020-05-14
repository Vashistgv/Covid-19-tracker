
import React from 'react'
import { Table, Tag, Space } from 'antd';

const columns = [
    {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
        render: text => <a>{text}</a>,
        sorter: (a, b) => a.state.localeCompare(b.state),

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
    {
        title: 'Recovered',
        dataIndex: 'recovered',
        key: 'recovered' ,
        ellipsis: true,
    },
    {
        title: 'Deaths',
        dataIndex: 'deaths',
        key: 'deaths',
        responsive: ['md'],
    },
];



const CovidTable = ({ data, loading }) => {
    return (
        <Table columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            scroll={{ y: 240 }}
            loading={loading}
            title={() => 'Covid India Tracker'}
        />

    )
}

export default CovidTable;



