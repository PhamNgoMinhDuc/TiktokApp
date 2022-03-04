import React, { useRef, useState } from "react";

import { HiMusicNote } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

function Video(props) {
  const { data } = props;
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="content-container scroll-snap-item">
      <div className="content">
        <div className="avatar">
          <img src={data.avatar} alt="" />
        </div>
        <div className="content-column">
          <div className="content-title">
            <div className="content-header">
              <a className="content-name" href="#">
                {data.idName}
              </a>
              <a className="content-decs" href="#">
                {data.nickName}
              </a>
            </div>
            <span>
              <a className="content-tags" href="#">
                {data.content}
              </a>
            </span>

            <span>
              <a className="content-music" href="#">
                <HiMusicNote style={{ fontSize: "13px", marginRight: "5px" }} />
                {data.music}
              </a>
            </span>
          </div>
          <div className="content-follow">Follow</div>
          <div className="content-body">
            <div className="content-video">
              <video ref={videoRef} onMouseOver={(event) => event.target.play()} onMouseOut={(event) => event.target.pause()} className="video" onClick={handleVideo} src={data.video}></video>
            </div>
            <div className="content-like">
              <div className="content-icons">
                <AiFillHeart />
              </div>
              <span>{data.like}</span>
              <div className="content-icons">
                <FaCommentDots />
              </div>
              <span>{data.cmt}</span>
              <div className="content-icons">
                <IoMdShareAlt />
              </div>
              <span>{data.share}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
