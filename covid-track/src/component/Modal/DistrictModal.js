import React from 'react';
import { Modal } from 'antd';
import DistTable from '../Table/DistTable';



const DistrictModal = ({ data, loading, visible, handleOk, handleCancel }) => {

    return (
        <>

            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
               
                bodyStyle = {{ height : "500px" , overflow : "scroll"}}
            >
                <DistTable data={data} loading={loading} />
            </Modal>


        </>
    )
}


export default DistrictModal; 