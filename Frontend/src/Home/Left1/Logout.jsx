import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../assets/chatLogoFinal.png";
import { IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
function Logout() {
  return (
    <div className="bg-[#118B50] pt-2 px-1 flex flex-col-reverse items-center justify-between">
      <IconButton>
        <LogoutIcon className="text-[#FBF6E9]" />
      </IconButton>

      <div className="h-[40px]">
        <img src={logo} alt="" className="h-full" />
      </div>
    </div>
  );
}

export default Logout;
