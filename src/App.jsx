import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Accueil from './composants/Accueil/Accueil';
import Dashboard from './composants/DashBoard/Dashboard';
import Details from './composants/Details/Details';
import ChatBot from "./composants/Chat/ChatBot";
import About from "./composants/About/About";
import Contact from "./composants/Contact/Contact";


function App() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  return (
    <>
      <BrowserRouter basename="/AutoConcession">
          <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/details/:VIN" element={<Details />}/>
              <Route path="/chatbot" element={<ChatBot/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<Navigate to="//" />} />
          </Routes>
          <button onClick={() => setIsChatBotOpen(true)} className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full" style={isChatBotOpen ? { visibility: "hidden" } : { visibility: "visible" }}>💬</button>
          <div
            className={`fixed bottom-6 right-6 w-80 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ${
              isChatBotOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex justify-between items-center bg-blue-600 text-white p-3">
              <h3 className="text-lg font-semibold">Chatbot</h3>
              <button onClick={() => setIsChatBotOpen(false)} className="text-white text-xl font-bold">&times;</button>
            </div>
            <ChatBot />
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
