import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
      <div className="flex items-center p-1 shadow-md">
        <img
          className="h-6 w-6"
          src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
          alt="user-profile-photo"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
  );
};

export default ChatMessage;
