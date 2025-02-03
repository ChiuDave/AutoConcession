import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './composants/Accueil/Accueil';
import Dashboard from './composants/DashBoard/Dashboard';
import Details from './composants/Details/Details';
import ChatBot from "./composants/Chat/ChatBot";

function App() {

  return (
    <BrowserRouter basename="/VoitureAI">
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/chatbot" element={<ChatBot/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
