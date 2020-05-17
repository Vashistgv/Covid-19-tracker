
import React from 'react'
import { Table, Tag, Space } from 'antd';



const CovidTable = ({ data, loading,  onStateClicked } ) => {

const onClick = (text) => {
    console.log("thsi sjsijfks " , text)
}


    const columns = [
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            render: text => <a onClick={ () => onStateClicked(text)} >{text}</a>,
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
    

    return (
        <Table columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            
            loading={loading}
          
        />

    )
}

export default CovidTable;



