import React from "react";
import { CaretRightOutlined, InfoCircleFilled } from "@ant-design/icons";
import "./Song.css";

const SongCard = ({
  photo,
  name,
  preview,
  artist,
  album,
  setSongState,
  video,
  showDrawer,
  smallPhoto,
  artistName,
}) => {
  const songSelector = () => {
    if (video.current) {
      video.current.pause();
      video.current.removeAttribute("src");
      video.current.load();
    }
    showDrawer();
    setSongState({
      name: name,
      artistName: artistName,
      album: album,
      video: preview,
      photo: smallPhoto,
    });
  };
  return (
    <div className="CardContainer">
      <div className="container">
        <img src={photo} alt="Avatar" className="image" />
        <div className="middle">
          <div className="text">
            <CaretRightOutlined onClick={songSelector} />
            <div className="infoIcon">
              <a href={artist}>
                <InfoCircleFilled />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SongCard;
