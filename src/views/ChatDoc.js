// import React, { useEffect } from "react"; /*배포용 */
import React, { useState, useEffect, useRef } from "react";
import Typing from "react-typing-animation";
import "../assets/scss/chat.scss";
import axios from "axios";
import { Spinner } from "reactstrap";

//자금현황
const ChatDoc = () => {
  const [messages, setMessages] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);
  const [spin, setSpin] = useState(false);

  const messageEndRef = useRef(null);

  const handleSendMessage = async (message) => {
    let mid = Date.now();

    //바로 입력
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
    ]);

    setSpin(true);

    try {
      console.log("text", message.id);
      // const response = await axios.post(
      //   // "/api/chatqna",
      //   "http://127.0.0.1:8000/api/chatqna",
      //   {
      //     question: message,
      //     mid: mid,
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      //const responseData = response.data;
      const responseData = "ddddddddddddddddddddddsfe2t666747u8989dsgsws00---=";

      //답변
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: responseData,
          isUser: false,
          isTyping: true,
          id: mid,
        },
      ]);
      setSpin(false);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  };

  const handleEndTyping = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, isTyping: false } : msg
      )
    );
    setCurrentTypingId(null);
  };

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    console.log("messages", messages);
    if (currentTypingId === null) {
      const nextTypingMessage = messages.find(
        (msg) => !msg.isUser && msg.isTyping
      );
      console.log("currentTypingId:", currentTypingId);
      if (nextTypingMessage) {
        setCurrentTypingId(nextTypingMessage.id);
      }
    }
  }, [messages, currentTypingId]);

  //채팅 창 틀
  return (
    <div className="chat">
      <div className="chat-box ">
        <h1>ChatDocs</h1>
        <div className="messages-list">
          {spin ? (
            <>
              <div className="loading">
                <p className="loading-text">
                  <Spinner />
                  AI가 문서를 읽어오는 중입니다. 😀
                </p>
              </div>
              <MessageList
                messages={messages}
                currentTypingId={currentTypingId}
                onEndTy
                ping={handleEndTyping}
              />
            </>
          ) : (
            <MessageList
              messages={messages}
              currentTypingId={currentTypingId}
              onEndTyping={handleEndTyping}
            />
          )}
          <div ref={messageEndRef}></div>
        </div>
        <MessageForm onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

const MessageList = ({ messages, currentTypingId, onEndTyping }) => (
  <div>
    {messages.map((message, index) => (
      <Message
        key={index}
        {...message}
        onEndTyping={onEndTyping}
        currentTypingId={currentTypingId}
      />
    ))}
  </div>
);

const Message = ({
  text,
  isUser,
  isTyping,
  id,
  onEndTyping,
  currentTypingId,
}) => {
  return (
    <div className={isUser ? "user-message" : "ai-message"}>
      {isTyping && currentTypingId === id ? (
        <Typing speed={50} onFinishedTyping={() => onEndTyping(id)}>
          <p>
            {/* <b>AI</b>: {text} */}
            <b>AI</b> :
            {text.split("\n").map((line) => {
              let data = line === "" ? " " : line;
              return (
                <span>
                  {data}
                  <br />
                </span>
              );
            })}
          </p>
        </Typing>
      ) : (
        <p>
          {/* <b>{isUser ? "User" : "AI"}</b>: {text} */}
          <b>{isUser ? "User" : "AI"}</b>:{" "}
          {text.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </p>
      )}
    </div>
  );
};

// 채팅창 입력란
const MessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="message-input"
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  );
};

export default ChatDoc;
