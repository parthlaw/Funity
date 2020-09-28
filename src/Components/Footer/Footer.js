import React from "react";
import { PlayCircleFilled, PauseCircleFilled } from "@ant-design/icons";
import "./Footer.css";
const Foot = ({ video, songState, showDrawer }) => {
  return (
    <div className="FooterWrapper">
      <div className="InsideWrapper">
        <div className="PlayPause">
          {video.current ? (
            video.current.paused ? (
              <PlayCircleFilled
                onClick={() => {
                  video.current.play();
                  showDrawer();
                }}
              />
            ) : (
              <PauseCircleFilled
                onClick={() => {
                  video.current.pause();
                  showDrawer();
                }}
              />
            )
          ) : null}
        </div>
        <div onClick={showDrawer} className="SongName">
          <span>{songState.name}</span>
          <span>{songState.album}</span>
        </div>
      </div>
      <div>
        {songState.photo != "" ? (
          <div className="SongImage">
            <img src={songState.photo} alt="song Image" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Foot;
