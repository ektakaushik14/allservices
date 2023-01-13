import React, { useEffect, useRef, useState } from "react";
import constants from "./constants";
import Search from "../../Images/search.png";
import "./actAs.css";
import { data, getImage } from "./IndividualAct";
import CompanyLogo from "../../Images/CompanyLogo.png";
import UserImg from "../../Images/userImg.png";
import WelcomePageImg from "../../Images/welcomePage.png";

export default function ActAs() {
  const [openChat, setOpenChat] = useState();
  const [inputSearch, setInputSearch] = useState("");
  const [chatContent, setChatContent] = useState({});
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectUser = (random, name, key) => {
    setOpenChat((prev) => (prev = { name: name, img: random, index: key }));
  };

  const handleChatContent = (content, chatName) => {
    setIsLoading(true);
    setChatContent({
      ...chatContent,
      [chatName]: { ask: content },
    });
  };

  useEffect(() => {
    var openChatElement = document.querySelector(".openChatSection");
    if (openChatElement) {
      openChatElement.scrollTop = openChatElement.scrollHeight;
    }
    // getImage();
    if (openChat) {
      const chatData = chatContent[openChat.name];

      if (chatData && chatData["ask"]) {
        data(chatData["ask"], openChat.name).then((data) => {
          setIsLoading(false);
          setConversation((prev) => [
            ...prev,
            { [openChat.name]: { ask: chatData["ask"], answer: data } },
          ]);
        });
      }
    }
  }, [chatContent]);

  useEffect(() => {
    var openChatElement = document.querySelector(".openChatSection");
    if (openChatElement) {
      openChatElement.scrollTop = openChatElement.scrollHeight;
    }
  }, [conversation]);

  const Chat = ({ name, index }) => {
    const random = Math.floor(Math.random() * constants.length) + 1;

    return (
      <div
        className={openChat && openChat.index === index ? "acitveChat" : ""}
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
          {conversation.map((name) => {
            if (Object.keys(name)[0] === openChat.name) {
              return (
                <>
                  {name[openChat.name]["ask"] && (
                    <div>
                      <div>
                        <img src={UserImg} />
                      </div>
                      <div>{name[openChat.name]["ask"]}</div>
                    </div>
                  )}
                  {name[openChat.name]["answer"] && (
                    <div className="openChatSectionAnswer">
                      <div>
                        <img src={CompanyLogo} />
                      </div>
                      <div>{name[openChat.name]["answer"]}</div>
                    </div>
                  )}
                </>
              );
            }
          })}
          {isLoading ? <div>Loading...</div> : null}
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

  const WelcomePage = () => {
    return (
      <div className="welcomePage">
        <img src={WelcomePageImg} alt="" />
        <div>Please select a chat to start messaging</div>
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
      {openChat == null ? <WelcomePage /> : <OpenChat />}
      <div></div>
    </div>
  );
}
