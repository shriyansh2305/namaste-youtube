import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="w-48  px-10 py-4 shadow-lg">
        <ul className="border-b-2 border-gray-200 py-2">
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
        <h1 className="py-2 font-bold">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
