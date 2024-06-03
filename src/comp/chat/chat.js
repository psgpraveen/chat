import React, { useEffect, useState } from "react";
import { user } from "../join/Join";
import sendimage from "./send.png";
import "./chat.css";
import Header from '../header/header'
import Scroll from "react-scroll-to-bottom";
import Baate from "../baate/baate";
import SocketIO from "socket.io-client";
const ENDPOINT = "https://pspraveen-chat-app.onrender.com/";
let socket;
// let msg=[];
const Chat = () => {
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState([]);
  const [id, setID] = useState("");
  useEffect(() => {
    socket = SocketIO(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      alert("connected");
      setID(socket.id);
    });
    socket.emit("joined", { user });
    socket.on("Welcome", (data) => {
      setMsg([...msg, data]);
      console.log(data.user, data.message);
    });
    socket.on("UserJoined", (data) => {
      setMsg([...msg, data]);
      console.log(data.user, data.message);
    });
    socket.on("leave", (data) => {
      setMsg([...msg, data]);
      console.log(data.user, data.message);
    });
    return () => {
      socket.off();
    };
  },[]);
  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMsg([...msg, data]);
      console.log(data.user, data.message, data.id);
    });
    return () => {
      socket.off("sendMessage");
    };
  }, [msg]);
  const send = () => {
      socket.emit("message", { message, id });
    setMessage("");
  };

  return (
    <div className="chat-page">
      <div className="chat-content">
        <div className="header"><Header/></div>
        <Scroll className="chat">
          {msg.map((itam, me) => {
           
            return (
              <Baate
                Gossip={itam.message}
                user={itam.id === id ? null : itam.user}
                classs={itam.id === id ? "right" : "left"}
              />
            );
          })}
        </Scroll>
        <div className="input">
          <input
            type="text"
            value={message}
            placeholder="Type Your Message here ..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(p) => {
              if (p.key === "Enter") {
                send();
              }
            }}
            className="sendinput"
          />
          <button className="sendbtn" onClick={send}>
            <img src={sendimage} alt="img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
