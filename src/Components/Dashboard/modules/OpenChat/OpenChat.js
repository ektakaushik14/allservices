import React, { useEffect, useState } from "react";
import "./openchat.css";
import { data } from "./ChatFunction";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../../firebase";
import {
  contentServicesWithQuestions,
  contentServicesTemplates,
} from "../../../../utils/contentConstants";
import EmptyChatContent from "../../../../Images/emptyChatContent.png";
import Loader from "../../../../Images/loader.png";
export default function OpenChat({ selectedChat, selectedCard, userDetails }) {
  const [chatText, setChatText] = useState("");
  const [chatContent, setChatContent] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [temprature, setTemprature] = useState(1);
  const [no_of_tokens, set_no_of_tokens] = useState(100);
  const [parsedText, setParsedText] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChatContent = (text, selectedChat) => {
    setLoading(true);
    const QA = { q: text };
    setChatText("");
    const selectedTemplatesList = contentServicesTemplates[selectedChat];
    data(text, selectedChat, temprature, no_of_tokens, selectedTemplatesList)
      .then((response) => {
        var finalText = response;

        if (finalText[finalText.length] === `"`) {
          finalText[finalText.length] = "";
        }
        if (
          finalText.indexOf("}") === -1 &&
          finalText[finalText.length] != `"`
        ) {
          finalText = finalText + `"`;
        }
        if (finalText.indexOf("}") === -1) {
          finalText = finalText + "}";
        }

        console.log(parsedText);

        setParsedText({
          [text]: JSON.parse(
            finalText.substring(
              finalText.indexOf("{"),
              finalText.lastIndexOf("}") + 1
            )
          ),
        });

        QA.a = JSON.parse(
          finalText.substring(
            finalText.indexOf("{"),
            finalText.lastIndexOf("}") + 1
          )
        );
        setChatContent([QA, ...chatContent]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleUpdateChat();
  }, [chatContent]);

  const handleUpdateChat = async () => {
    if (userDetails) {
      //   setLoading(true);
      const colRef = collection(db, "Dashboard", userDetails.email, "Chat");
      await setDoc(
        doc(colRef, selectedChat.replace(/\s*\([^)]*\)/g, "")),
        { chat: { ...chatContent, createdAt: serverTimestamp() } },
        { merge: true }
      )
        .then(() => {})
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    }
  };

  return (
    <div className="openChatContainer">
      <div className="openChatLeftNav">
        <div className="openChatInput">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/8068/8068013.png"
              alt=""
            />{" "}
            {contentServicesWithQuestions[selectedChat.match(/\((.*?)\)/)[1]]}
          </div>
          <textarea
            onKeyDown={(e) => {
              if (!loading && e.key === "Enter") {
                handleChatContent(chatText, selectedChat.match(/\((.*?)\)/)[1]);
              }
            }}
            value={chatText}
            onChange={(e) => setChatText(e.target.value)}
            placeholder="Type..."
            rows="6"
            cols="50"
          ></textarea>
        </div>
        <div className="openChatTemplate">
          <div>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/8068/8068070.png"
              alt=""
            />{" "}
            Choose a template
          </div>
          <div>
            <button
              onClick={() => setSelectedTemplate(0)}
              className={selectedTemplate === 0 ? "selected" : ""}
            >
              Use All
            </button>
            <button
              onClick={() => setSelectedTemplate(1)}
              className={selectedTemplate === 1 ? "selected" : ""}
            >
              Select Single
            </button>
          </div>
          {selectedTemplate === 1 && (
            <div className="templateDropdown">
              <select name="templateDropdownSelect">
                <option>Select a template</option>
                {contentServicesTemplates[
                  selectedChat.match(/\((.*?)\)/)[1]
                ].map((temp) => (
                  <option>{temp}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="tempratureContainer">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/8068/8068125.png"
              alt=""
            />{" "}
            Select Temprature
          </div>
          <div>
            <button
              className={temprature === 0.25 ? "selectedTempToken" : ""}
              onClick={() => setTemprature(0.25)}
            >
              0.25
            </button>
            <button
              className={temprature === 0.5 ? "selectedTempToken" : ""}
              onClick={() => setTemprature(0.5)}
            >
              0.50
            </button>
            <button
              className={temprature === 0.75 ? "selectedTempToken" : ""}
              onClick={() => setTemprature(0.75)}
            >
              0.75
            </button>
            <button
              className={temprature === 1 ? "selectedTempToken" : ""}
              onClick={() => setTemprature(1)}
            >
              1
            </button>
          </div>
        </div>
        <div className="noOfTokensContainer">
          <div>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/8068/8068178.png"
              alt=""
            />{" "}
            Select No Of Tokens
          </div>
          <div>
            <button
              className={no_of_tokens === 100 ? "selectedTempToken" : ""}
              onClick={() => set_no_of_tokens(100)}
            >
              100
            </button>
            <button
              className={no_of_tokens === 200 ? "selectedTempToken" : ""}
              onClick={() => set_no_of_tokens(200)}
            >
              200
            </button>
            <button
              className={no_of_tokens === 300 ? "selectedTempToken" : ""}
              onClick={() => set_no_of_tokens(300)}
            >
              300
            </button>
            <button
              className={no_of_tokens === 400 ? "selectedTempToken" : ""}
              onClick={() => set_no_of_tokens(400)}
            >
              400
            </button>
          </div>
        </div>
        <div className="openChatGenerate">
          <div>Tokens Left :</div>
          <button
            onClick={() => {
              if (!loading)
                handleChatContent(chatText, selectedChat.match(/\((.*?)\)/)[1]);
            }}
          >
            Generate Content
          </button>
        </div>
      </div>
      <div className="openChatRight">
        {!loading && parsedText ? (
          <div>
            <div>{Object.keys(parsedText)[0]}</div>
            <div>
              {Object.entries(Object.values(parsedText)[0]).map((c) => (
                <div>
                  <div>{c[0]}</div>
                  <div>{c[1]}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="openChatRightEmpty">
            {loading ? (
              <img className="loadingIcon" src={Loader} />
            ) : (
              <img src={EmptyChatContent} />
            )}
          </div>
        )}
      </div>
    </div>

    // <div className="openChat">
    //   <div className="openChatHeader">
    //     <img src={`https://avatars.dicebear.com/api/male/hello.svg`} alt="" />
    //     <div className="openChatHeaderNameContainer">
    //       <div className="openChatHeaderName">
    //         <b>
    //           {selectedChat
    //             ? selectedChat[0].toUpperCase() + selectedChat.slice(1)
    //             : "Name"}
    //         </b>
    //       </div>
    //     </div>
    //     <div className="openChatHeaderOptions">
    //       <div>Clear Chat</div>
    //     </div>
    //   </div>
    //   <div className="openChatSection">
    //     {/* {conversation.map((name) => {
    //               if (Object.keys(name)[0] === openChat.name) {
    //                 return (
    //                   <>
    //                     {name[openChat.name]["ask"] && (
    //                       <div>
    //                         <div>
    //                           <img src={UserImg} />
    //                         </div>
    //                         <div>{name[openChat.name]["ask"]}</div>
    //                       </div>
    //                     )}
    //                     {name[openChat.name]["answer"] && (
    //                       <div className="openChatSectionAnswer">
    //                         <div>
    //                           <img src={CompanyLogo} />
    //                         </div>
    //                         <div>{name[openChat.name]["answer"]}</div>
    //                       </div>
    //                     )}
    //                   </>
    //                 );
    //               }
    //             })}
    //             {isLoading ? <div>Loading...</div> : null} */}
    //   </div>
    //   <div className="openChatInputContainer">
    //     <div className="openChatInput">
    //       <input
    //         value={chatText}
    //         onChange={(e) => setChatText(e.target.value)}
    //         onKeyDown={(e) => {
    //           if (e.key === "Enter") {
    //             handleChatContent(
    //               e.target.value,
    //               selectedChat.match(/\((.*?)\)/)[1]
    //             );
    //           }
    //         }}
    //         type="text"
    //         placeholder="Ask anything..."
    //       />
    //       {/* <img src={Send} alt="" /> */}
    //     </div>
    //   </div>
    // </div>
  );
}
