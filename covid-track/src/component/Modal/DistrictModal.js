import React from "react";
import { Modal } from "antd";
import DistTable from "../Table/DistTable";
import "../Table/Table.scss";

const DistrictModal = ({ data, loading, visible, handleOk, handleCancel }) => {
  return (
    <>
      <Modal
        wrapClassName="modalwrapper"
        className="modalClass"
        title="District covid tracker"
        width="60vw"
        style={{top: "0", paddingBottom:"0"}}
        footer={null}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ height: "65vh", overflow: "hidden"}}
      >
        <DistTable data={data} loading={loading} />
      </Modal>
    </>
  );
};

export default DistrictModal;
