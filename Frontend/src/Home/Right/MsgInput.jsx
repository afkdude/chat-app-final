import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

function MsgInput() {
  return (
    <>
      <div className="flex py-[5px] border-l border-t border-gray-300 px-4 items-center bg-[#FBF6E9]">
        <input
          type="text"
          placeholder="Type a Message"
          className="text-[20px] outline-none bg-[#FBF6E9] flex-1 text-gray-600"
        />

        <IconButton>
          <SendIcon className="text-[#5DB996]" />
        </IconButton>
      </div>
    </>
  );
}

export default MsgInput;
