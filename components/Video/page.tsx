'use client'

import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  // Replace 'VIDEO_ID' with the ID of your YouTube video
  const videoId = '4D8TYRun1HM';

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='flex items-center justify-center p-24'>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
