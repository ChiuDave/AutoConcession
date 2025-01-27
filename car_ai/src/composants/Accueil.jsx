import React, { useState } from "react";
import Navbar from './Navbar'

const Accueil = () => {

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navbar />
       {/* Main content */}
       <div style={{ marginTop: "60px", padding: "20px" }}>
        <h1>Accueil</h1>
        <h1>Un nouveau marché révolutionnaire</h1>
        <div style={{}}> 
          <h3>Un nouveau moyen pour effectuer vos achat en ligne. Notre petit robot vous aidera à choisir la voiture de vos rêves selon vos préférence</h3>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
