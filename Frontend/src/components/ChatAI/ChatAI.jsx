import React, { useState } from "react";
import "./ChatAI.css";
const ChatAI = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I am your AI Assistant. How can I help you?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [role, setRole] = useState("Analyst");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { text: input, sender: "user" },
      { text: "Thinking...", sender: "ai" },
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="chat6631">
      <div className="header6631">
        <h2>AI Assistant</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Analyst</option>
          <option>Marketing</option>
          <option>Retention</option>
          <option>Finance</option>
        </select>
      </div>

      <div className="messages6631">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "userMsg6631" : "aiMsg6631"}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="inputBox6631">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
};

export default ChatAI;
