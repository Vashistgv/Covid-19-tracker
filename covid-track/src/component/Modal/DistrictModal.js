import React from "react";
import { Modal } from "antd";
// import DistTable from "../Table/DistTable";
import TestTable from "../Table/TestTable";
import "../Table/TestTable.scss";

const DistrictModal = ({ data, loading, visible, handleOk, handleCancel }) => {
  return (
    <>
      <Modal
        wrapClassName="modalwrapper"
        className="modalClass"
        title="District covid tracker"
        width="60vw"
        style={{top: "0", paddingBottom:"0"}}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ height: "65vh", overflow: "hidden"}}
      >
        {/* <DistTable data={data} loading={loading} /> */}
        <TestTable data={data} />
      </Modal>
    </>
  );
};

export default DistrictModal;
