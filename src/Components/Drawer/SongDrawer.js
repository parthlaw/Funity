import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Drawer } from "antd";

const SongDrawer = ({ onClose, visible, songState, video }) => {
  return (
    <>
      <Drawer
        title={songState.name}
        height={"100%"}
        placement={"bottom"}
        onClose={onClose}
        visible={visible && songState.name}
        bodyStyle={{ paddingBottom: 80, backgroundColor: "black" }}
        footer={null}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <video controls ref={video}>
            <source src={songState.video} type="video/mp4" />
          </video>
        </div>
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>{songState.name}</span>
          <br />
          <span>{songState.artistName}</span>
          <br />
          <span>{songState.album}</span>
        </div>
      </Drawer>
    </>
  );
};
export default SongDrawer;
