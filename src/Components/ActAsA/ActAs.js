import React, { useEffect, useRef, useState } from "react";
import constants from "./constants";
import Search from "../../Images/search.png";
import "./actAs.css";
import { data, getImage } from "./IndividualAct";
import CompanyLogo from "../../Images/CompanyLogo.png";

export default function ActAs() {
  const [openChat, setOpenChat] = useState({ name: constants[0] });
  const [inputSearch, setInputSearch] = useState("");
  const [chatContent, setChatContent] = useState({});
  const [chat, setChat] = useState();

  const handleSelectUser = (random, name, key) => {
    setOpenChat((prev) => (prev = { name: name, img: random, index: key }));
  };

  const handleChatContent = (content, chatName) => {
    setChatContent({ ...chatContent, [chatName]: { ask: content } });
  };

  useEffect(() => {
    getImage()
    const dataa = chatContent[openChat.name];

    if (dataa && dataa["ask"]) {
      data(dataa["ask"], openChat.name).then((data) => {
        setChat(data);
      });
    }
  }, [chatContent]);

  const Chat = ({ name, index }) => {
    const random = Math.floor(Math.random() * constants.length) + 1;

    return (
      <div
        className={openChat.index === index ? "acitveChat" : ""}
        onClick={() => handleSelectUser(random, name, index)}
      >
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

  const OpenChat = () => {
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
        <div className="openChatSection">
          <div>
            <div></div>
            <div>
              {chatContent[openChat.name] && chatContent[openChat.name]["ask"]}
            </div>
          </div>
          <div>
            <div>
              <img src={CompanyLogo} />
            </div>
            <div>{chat}</div>
          </div>
        </div>
        <div className="openChatInput">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleChatContent(e.target.value, openChat.name);
              }
            }}
            type="text"
            placeholder="Ask anything..."
          />
        </div>
      </div>
    );
  };

  return (
    <div className="actAs">
      <div className="activeAsAChats">
        <div>
          <div>Inbox</div>
          <div className="individualChatSearch">
            <input
              value={inputSearch}
              onChange={(e) => {
                setInputSearch(e.target.value);
              }}
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
          {constants
            .filter((name) => name.toLowerCase().includes(inputSearch))
            .map((name, key) => (
              <Chat key={key} index={key} name={name} />
            ))}
        </div>
      </div>
      <OpenChat />
      <div></div>
    </div>
  );
}
