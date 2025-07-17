import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between p-5 shadow-lg">
      <div className="flex w-1/4 mx-2">
        <img
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          alt="menu"
          onClick={() => toggleMenuHandler()}
        />
        <Link to="/">
          <img
            className="h-8 px-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </Link>
      </div>
      <div className="w-2/4 flex">
        <input
          className="w-3/4 border border-gray-400 rounded-l-full p-2"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full py-2 px-4 bg-gray-200">
          🔍
        </button>
      </div>
      <div className="w-1/4 flex items-center justify-end px-14">
        <img
          className="h-10"
          src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
