import React, { useEffect, useRef, useState } from "react";
import constants from "./constants";
import Search from "../../Images/search.png";
import "./actAs.css";
import { data, getImage } from "./IndividualAct";
import CompanyLogo from "../../Images/CompanyLogo.png";
import UserImg from "../../Images/userImg.png";
import WelcomePageImg from "../../Images/welcomePage.png";
import Sun from "../../Images/sun.png";
import Moon from "../../Images/moon.png";
import Send from "../../Images/send.png";

export default function ActAs() {
  const [openChat, setOpenChat] = useState();
  const [inputSearch, setInputSearch] = useState("");
  const [chatContent, setChatContent] = useState({});
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [chatArray, setChatArray] = useState([
    { questions: [] },
    { answer: [] },
  ]);

  const handleSelectUser = (random, name, key) => {
    setOpenChat((prev) => (prev = { name: name, img: random, index: key }));
  };

  const handleChatContent = (content, chatName) => {
    setIsLoading(true);

    setChatContent({
      ...chatContent,
      [chatName]: { ask: content },
    });

    const updatedChatArray = [...chatArray];

    console.log(updatedChatArray);
    // updatedChatArray[0].questions.push(content);
    // setChatArray(updatedChatArray);
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
          let updatedChatArray = [...chatArray];
          // updatedChatArray[1].answer.push(data);
          // setChatArray(updatedChatArray);
          setIsLoading(false);
          setConversation((prev) => [
            ...prev,
            { [openChat.name]: { ask: chatData["ask"], answer: data } },
          ]);
        });
      }
    }
  }, [chatContent]);

  const handlePushAnswer = async () => {};

  useEffect(() => {
    var openChatElement = document.querySelector(".openChatSection");
    if (openChatElement) {
      openChatElement.scrollTop = openChatElement.scrollHeight;
    }
  }, [conversation]);

  useEffect(() => {
    console.log(chatArray, ">>>>>");
  }, [chatArray]);

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
            <div className="openChatHeaderName">
              Conversation with <b>{openChat.name}</b>
            </div>
          </div>
          <div className="openChatHeaderOptions">
            <div>Clear Chat</div>
          </div>
        </div>
        <div className="openChatSection">
          {/* {conversation.map((name) => {
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
          {isLoading ? <div>Loading...</div> : null} */}
        </div>
        <div className="openChatInputContainer">
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
            <img src={Send} alt="" />
          </div>
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
    <div className="actAsContainer">
      <div className="actAsHeaderContainer">
        <div className="actAsHeader">
          <div className="actAsHeaderLogo">
            <img src={CompanyLogo} alt="" />
          </div>
          <div className="actAsHeaderContent">
            <div className="themeSwitcher">
              {/* <div>
                <input type="checkbox" class="checkbox" id="checkbox" />
                <label for="checkbox" class="label">
                  <img src={Moon} class="fas fa-moon" />
                  <img src={Sun} class="fas fa-sun" />
                  <div class="ball" />
                </label>
              </div> */}
            </div>
            <div>Good Morning, John</div>
            <div>S</div>
          </div>
        </div>
      </div>
      <div className="actAs">
        <div className="activeAsAChats">
          <div>
            <div className="individualChatSearch">
              <input
                value={inputSearch}
                placeholder="Search"
                onChange={(e) => {
                  setInputSearch(e.target.value);
                }}
                type="text"
              />
              <img src={Search} alt="" />
            </div>
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
        {openChat == null ? null : (
          <div className="actAsRightSection">
            <div className="actAsRightSectionTopCard">
              <div className="actAsRightSectionTopCardImg">
                <img
                  src={`https://avatars.dicebear.com/api/male/${openChat.img}.svg`}
                  alt=""
                />
                Name
              </div>
              <div>
                <div>
                  <div>Created On</div>
                  <div></div>
                </div>
                <div>
                  <div>Last Modified</div>
                  <div></div>
                </div>
                <div>
                  <div>Total Tokens Used</div>
                  <div></div>
                </div>
                <div>
                  <div>Recent Generated Tokens</div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="actAsRightSectionBottomContent">
              <div>Chat Summary</div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
