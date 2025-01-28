import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './composants/Accueil/Accueil';
import Dashboard from './composants/DashBoard/Dashboard';
import Details from './composants/Details/Details';

function App() {

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/details" element={<Details />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App
