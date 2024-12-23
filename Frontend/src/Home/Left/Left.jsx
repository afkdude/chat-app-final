import React from "react";
import Search from "./Search";
import Users from "./Users";
import "./LeftStyles.css";

function Left() {
  return (
    <div className="w-[30%] h-full bg-[#FBF6E9]  flex flex-col   ">
      <h1 className="py-3 px-2 ps-5 font-bold text-[23px] text-[#222831] border-b">
        Chats
      </h1>
      <Search />

      <Users />
    </div>
  );
}

export default Left;
