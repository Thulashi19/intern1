import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Navbar />
      {!loggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <Dashboard />}
      <Footer />
    </div>
  );
}

export default App;
