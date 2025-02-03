import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './composants/Accueil/Accueil';
import Dashboard from './composants/DashBoard/Dashboard';
import Details from './composants/Details/Details';
import ChatBot from "./composants/Chat/ChatBot";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/VoitureAI/" element={<Accueil />} />
            <Route path="/VoitureAI/dashboard" element={<Dashboard />}/>
            <Route path="/VoitureAI/details/:id" element={<Details />}/>
            <Route path="/VoitureAI/chatbot" element={<ChatBot/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
