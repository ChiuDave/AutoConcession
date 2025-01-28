import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbard = () => {

  return (
  
      <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-logo">Car IA</Link>
            </div>
            <div>
                <ul className="navbar-links">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/dashboard">Voitures</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    
  );
};

export default Navbard;
