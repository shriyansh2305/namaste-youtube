import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector(store => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // cache the data
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      }else {
        getSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

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

      <div className="flex flex-col w-2/4 relative">
        <div className="w-full flex">
          <input
            className="w-3/4 border border-gray-400 rounded-l-full p-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 rounded-r-full py-2 px-4 bg-gray-200"
            onClick={getSuggestions}
          >
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 &&  (
          <div className="bg-white p-2 w-3/4 shadow-lg rounded-lg border border-gray-200 absolute top-full">
            <ul>
              {suggestions.map((suggestion, idx) => (
                <li key={idx} className="py-2 px-3 shadow-sm hover:bg-gray-200">
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
