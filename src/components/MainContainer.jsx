import React from "react";
import FilterButtonLists from "./FilterButtonLists";
import VideoContainer from "./VideoContainer";
import { useEffect } from "react";
import { openMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  const openSidebar = () => {
    dispatch(openMenu());   
  }
  useEffect(() => {
    openSidebar();
  }, []);
  return (
    <div className="">
      <FilterButtonLists />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
