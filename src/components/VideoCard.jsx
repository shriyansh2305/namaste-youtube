import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { likeCount, viewCount } = statistics;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="w-72 p-2 m-2 shadow-lg bg-gray-100">
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>Views: {viewCount}</li>
        <li>Likes: {likeCount}</li>
      </ul>
    </div>
  );
};



export default VideoCard;
