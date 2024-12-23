import React from "react";
import avatar from "../../assets/avatar.png"

function ChatUser() {
  return (
    <>
      <div className="flex gap-4 py-[5px] px-2 ps-5 border-l border-b items-start">
        <div className="h-[50px] rounded-full bg-[#5DB996]  ">
          <img src={avatar} alt="avtar" className="h-full" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Name</h2>
          <span className="text-xs">Online</span>
        </div>
      </div>
    </>
  );
}

export default ChatUser;
