import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_BY_ID } from "../utils/constants";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  //   const getVideo = async () => {
  //     const data = await fetch(`${YOUTUBE_VIDEO_BY_ID}${videoId}&key=${GOOGLE_API_KEY}`);
  //     const json = await data.json();
  //     console.log(json);
  //   };
  useEffect(() => {
    dispatch(closeMenu());
    // getVideo();
  }, [dispatch]);
  return (
    <div>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
