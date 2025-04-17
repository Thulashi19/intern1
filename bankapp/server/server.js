const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample users for login validation
const users = [
  { username: "admin", password: "1234", role: "admin" },
  { username: "client", password: "12345", role: "client" },
];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user from the sample users array
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // If user is found, send success response with user role
    res.json({ success: true, message: `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} login successful` });
  } else {
    // If no user is found or credentials are wrong
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
