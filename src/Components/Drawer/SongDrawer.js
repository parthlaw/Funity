import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Drawer, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

const SongDrawer = ({ onClose, visible, songState, video }) => {
  return (
    <>
      <Drawer
        title={songState.name}
        height={"100%"}
        placement={"bottom"}
        onClose={onClose}
        visible={visible && songState.name}
        bodyStyle={{ paddingBottom: 80 }}
        footer={null}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <video width="600" height="350" controls ref={video}>
            <source src={songState.video} type="video/mp4" />
          </video>
        </div>
      </Drawer>
    </>
  );
};
export default SongDrawer;
