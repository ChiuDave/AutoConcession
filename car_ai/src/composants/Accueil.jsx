import React, { useState } from "react";
import Navbar from './Navbar'

const Accueil = () => {

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navbar />
      <h1>Accueil</h1>
    </div>
  );
};

export default Accueil;
