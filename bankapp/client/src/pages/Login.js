import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password
      });
      setMessage(response.data.message);
      onLogin(); // navigate to dashboard
    } catch (err) {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '100px'
    }}>
      <h2 style={{ color: "#FFD700" }}>Login </h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ margin: 5, padding: 10 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ margin: 5, padding: 10 }}
      />
      <button onClick={handleSubmit} style={{
        padding: '10px 20px',
        backgroundColor: '#FFD700',
        border: 'none',
        fontWeight: 'bold',
        marginTop: '10px'
      }}>
        Login
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Login;

