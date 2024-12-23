import React from 'react'
import ChatUser from './ChatUser';
import Messages from './Messages';
import MsgInput from './MsgInput';

function Right() {
  return (
    <div className="w-[70%] h-full bg-[#FBF6E9]  border-black flex flex-col justify-between ">
      <ChatUser />
      <Messages />
      <MsgInput/>
    </div>
  );
}

export default Right