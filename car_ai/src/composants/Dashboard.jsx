import React, { useState } from "react";
import Navbar from "./Navbar";

const Dashboard = () => {

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navbar />
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
