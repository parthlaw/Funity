import React, { useRef, useState } from "react";
import NavBar from "./Nav/Nav";
import Foot from "./Footer/Footer";
import "./Main.css";
import SongDrawer from "./Drawer/SongDrawer";
import { Row, Col } from "antd";
import SongList from "./SongCard/SongList";
import { Scrollbars } from "react-custom-scrollbars";
const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "#6B9EA8",
    width: "20px",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

const Main = () => {
  const [visible, setVisible] = useState(false);
  const [songState, setSongState] = useState({
    name: "",
    artistName: "",
    album: "",
    video: "",
    photo: "",
  });
  const video = useRef(null);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <SongDrawer
        onClose={onClose}
        visible={visible}
        songState={songState}
        video={video}
      />
      <Row
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "80px",
          right: "0px",
          overflow: "hidden",
        }}
      >
        <Col span={24}>
          <NavBar />
        </Col>
      </Row>

      <Row
        className="RowContent"
        style={{
          position: "absolute",
          top: "50px",
          bottom: "50px",
          left: "0px",
          right: "0px",
          overflow: "auto",
          overflowX: "hidden",
        }}
      >
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="ColContent"
        >
          <CustomScrollbars
            autoHide
            autoHideTimeout={500}
            autoHideDuration={100}
            renderTrackHorizontal={(props) => (
              <div
                {...props}
                style={{ display: "block" }}
                className="track-horizontal"
              />
            )}
          >
            <div className="DivContent">
              <SongList
                setSongState={setSongState}
                video={video}
                showDrawer={showDrawer}
              />
            </div>
          </CustomScrollbars>
        </Col>
      </Row>

      <Row
        style={{
          bottom: "0px",

          left: "0px",
          right: "0px",
          overflow: "hidden",
          position: "absolute",
          width: "100%",
        }}
      >
        <Col span={24}>
          <div>
            <Foot songState={songState} video={video} showDrawer={showDrawer} />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Main;
