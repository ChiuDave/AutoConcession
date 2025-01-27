import React, { useState } from "react";
import Navbar from './Navbar'

const Accueil = () => {

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navbar />
       {/* Main content */}
       <div style={{ marginTop: "60px", padding: "20px" }}>
        <h1>Accueil</h1>
      </div>
    </div>
  );
};

export default Accueil;
