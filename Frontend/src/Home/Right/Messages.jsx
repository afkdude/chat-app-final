import React from "react";
import "./RightStyles.css";

function Messages() {
  return (
    <>
      <div className="message-area flex-1 flex flex-col gap-3 p-3 ">
        <OthersMsg />
        <SelfMsg />
        <OthersMsg />
        <SelfMsg />
        <OthersMsg />
        <SelfMsg />
        <OthersMsg />
        <SelfMsg />
        <OthersMsg />
        <SelfMsg />
        <OthersMsg />
        <SelfMsg />
      </div>
    </>
  );
}

function OthersMsg() {
  return (
    <div className="flex  justify-start ">
      <div className="other-chat flex flex-col p-2 px-4 h-auto rounded-[10px]">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            consequatur odit facilis deserunt aut nulla maiores harum hic nam
            iste sit molestias provident incidunt et architecto nesciunt,
            doloribus qui quo.
          </p>
        </div>

        <div className="flex flex-row-reverse">
          <span className="font-thin text-xs">12:54</span>
        </div>
      </div>
    </div>
  );
}

function SelfMsg() {
  return (
    <div className="flex justify-end self-parent  ">
      <div className="self-chat p-3 bg-[#E3F0AF] rounded-[10px] ">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea.
          </p>
        </div>

        <div className="flex flex-row-reverse">
          <span className="font-thin text-xs">12:54</span>
        </div>
      </div>
    </div>
  );
}

export default Messages;
