import { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", borderRadius: "10px", padding: "10px" }}>
      <h1 style={{ textAlign: "center" }}>ChatBot</h1>
      <div style={{ flex: 1, overflowY: "auto", padding: "10px", borderBottom: "1px solid #ddd" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px 0" }}>
            <span style={{ background: msg.sender === "user" ? "#007bff" : "#ddd", color: msg.sender === "user" ? "#fff" : "#000", padding: "8px", borderRadius: "10px", display: "inline-block" }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", padding: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "8px 12px", borderRadius: "5px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
