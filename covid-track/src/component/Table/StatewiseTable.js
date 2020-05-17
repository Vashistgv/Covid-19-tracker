import React from 'react'
import {Table} from 'antd'

const columns = [
    {
        title: 'District',
        dataIndex: 'district',
        key: 'district',
        sorter: (a, b) => a.district.localeCompare(b.district),
        ellipsis: true,
    },
    {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
        ellipsis: true,
        // defaultSortOrder: 'descend',
        sorter: (a, b) => a.active - b.active,
    },
    {
        title: 'Zone',
        dataIndex: 'zone',
        key:'zone',
        ellipsis: true,
        filters: [
            {
                text: 'Red',
                value: 'red',
            },
            {
                text: 'Yellow',
                value: 'yellow',
            },
            {
                text: 'Orange',
                value: 'orange',
            },
            {
                text: 'Green',
                value: 'green'
            },
        ],
        onFilter: (value, record) => record.zone.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ['descend'],
    sorter: (a, b) => a.zone.localeCompare(b.zone),
    },
];

const StateTable = ({sdata, loading}) => {
    return(
        <Table columns= {columns}
        dataSource={sdata}
        pagination={{pageSize: 10}}
        loading={loading}
        />
    )
}
export default StateTable