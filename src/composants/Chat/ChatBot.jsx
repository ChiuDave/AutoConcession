import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const sendMessage = async () => {
        if (!input.trim()) return;

        setMessages((prevMessages) => [
            ...prevMessages,
            { text: input, sender: "user" },
        ]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_API_ROUTE}/api/chat`,
                {
                    method: "POST",
                    body: JSON.stringify({ message: input }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log("Bot response:", json);

            setLoading(false);

            let newMessages = [{ text: json.response, sender: "bot" }];

            if (json.metadata && Array.isArray(json.metadata) && json.metadata.length > 0) {
                const carMessages = json.metadata.map((car) => ({
                    sender: "bot",
                    type: "car",
                    vin: car.vin,
                    make: car.make,
                    model: car.model,
                    image_link: car.image_link,
                }));

                newMessages = [...newMessages, ...carMessages];
            }

            setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        } catch (error) {
            console.error("Error:", error.message);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[75vh] max-w-md mx-auto p-4">
            <h1 className="text-center text-lg font-bold">ChatBot</h1>
            <div className="flex-1 overflow-y-auto p-4 border-b border-gray-300">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex my-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        {msg.type === "car" ? (
                            <div className="p-3 bg-white shadow rounded-lg max-w-xs">
                                <p className="font-bold">{msg.make} {msg.model}</p>
                                {msg.image_link && (
                                    <img src={msg.image_link} alt={`${msg.make} ${msg.model}`} className="w-full h-auto rounded-lg my-2" />
                                )}
                                <button
                                    onClick={() => navigate(`/details/${msg.vin}`)}
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    View Details
                                </button>
                            </div>
                        ) : (
                            // Render text message
                            <div className={`px-4 py-2 rounded-lg max-w-[80%] break-words 
                                ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                                <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2 my-2">
                        <span className="text-gray-500 text-sm">Bot is typing...</span>
                    </div>
                )}
            </div>
            <div className="flex p-4 justify-center">
                <textarea
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Écrivez un message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                />
                <button
                    onClick={sendMessage}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                    disabled={loading}
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
