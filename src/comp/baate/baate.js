import React from "react";
import "./baate-ka-css.css";
const Baate = ({ user, Gossip, classs }) => {
  if (user) {
    return <div className={`msg ${classs}`}>{`${user}: ${Gossip}`}</div>;
  } else {
    return <div className={`msg ${classs}`}>{`You: ${Gossip}`}</div>;
  }
};

export default Baate;
