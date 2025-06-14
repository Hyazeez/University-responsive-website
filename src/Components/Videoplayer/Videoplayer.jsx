import './Videoplayer.css';
import React from 'react';
import Video from '../../assets/Video.mp4';

const Videoplayer = ({playState, setPlayState}) => {
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`}>
      <video src={Video} autoPlay muted controls />
      <button className="close-btn" onClick={() => setPlayState(false)}>X</button>
    </div>
  );
};

export default Videoplayer;
