import { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { text: input, sender: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API_ROUTE}/api/chat`, {
        method: "POST",
        body: JSON.stringify({ message: input }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Bot response:", json);

      setLoading(false);
      setMessages((prevMessages) => [...prevMessages, { text: json.response, sender: "bot" }]);

    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto border border-gray-300 rounded-lg p-4">
      <h1 className="text-center text-lg font-bold">ChatBot</h1>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 border-b border-gray-300">
        {messages.map((msg, index) => (
          <div key={index} className={`flex my-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <span
              className={`px-4 py-2 rounded-lg max-w-[80%] break-words 
                ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
            >
              {msg.text}
            </span>
          </div>
        ))}

        {/* Typing Indicator */}
        {loading && (
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2 my-2">
            <span className="text-gray-500 text-sm">Bot is typing...</span>
          </div>
        )}
      </div>

      {/* Input & Send Button */}
      <div className="flex p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
