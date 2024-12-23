import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
function Search() {
  return (
    <div className="">
      <form
        action=""
        className="bg-white flex items-center justify-between gap-2  px-2 ps-5 font-semibold text-[18px] rounded-[5px] m-2 text-gray-800 border-b-[#5DB996] border-b-2"
      >
        <input
          type="text"
          className="flex-1 outline-none"
          placeholder="Search for users!"
        />
        <button>
          <IconButton>
            <SearchIcon className="text-[#5DB996]" />
          </IconButton>
        </button>
      </form>
    </div>
  );
}

export default Search;
