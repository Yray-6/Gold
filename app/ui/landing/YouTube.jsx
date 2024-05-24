import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="relative overflow-hidden">
      <iframe
        className='h-screen w-[1000px]'

        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;