import React, { useEffect, useRef, useState } from "react";
import constants from "./constants";
import Search from "../../Images/search.png";
import "./actAs.css";

export default function ActAs() {
  const [openChat, setOpenChat] = useState({});
  const inputSearch = useRef();

  const handleSelectUser = (random, name) => {
    setOpenChat({ name: name, img: random });
  };

  const Chat = ({ name }) => {
    const random = Math.floor(Math.random() * constants.length) + 1;

    return (
      <div onClick={() => handleSelectUser(random, name)}>
        <div className="individualChat">
          <div>
            <img
              src={`https://avatars.dicebear.com/api/male/${random}.svg`}
              alt=""
            />
          </div>
          <div>
            <div>{name}</div>
            <div>Click to open chat.</div>
          </div>
          <div>10:32 am</div>
        </div>
      </div>
    );
  };

  const ActiveAsAChats = () => {
    return (
      <div className="activeAsAChats">
        <div>
          <div>Inbox</div>
          <div className="individualChatSearch">
            <input
              ref={inputSearch}
              value={inputSearch.current}
              onChange={(e) => (inputSearch.current = e.target.value)}
              type="text"
            />
            <img src={Search} alt="" />
          </div>
        </div>
        <div>
          <div className="activeAsAChatsActive">Unlocked</div>
          <div>Locked</div>
        </div>
        <div className="individualChatContainer">
          {constants.map((name) => (
            <Chat name={name} />
          ))}
        </div>
      </div>
    );
  };
  const OpenChat = () => {
    const random = Math.floor(Math.random() * constants.length) + 1;
    return (
      <div className="openChat">
        <div className="openChatHeader">
          <img
            src={`https://avatars.dicebear.com/api/male/${openChat.img}.svg`}
            alt=""
          />
          <div className="openChatHeaderNameContainer">
            <div className="openChatHeaderName">{openChat.name}</div>
            <div className="openChatHeaderTime">last active now</div>
          </div>
          <div className="openChatHeaderOptions">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="openChatSection"></div>
        <div className="openChatInput">
          <input type="text" placeholder="Ask anything..." />
        </div>
      </div>
    );
  };

  return (
    <div className="actAs">
      <ActiveAsAChats />
      <OpenChat />

      <div></div>
    </div>
  );
}
