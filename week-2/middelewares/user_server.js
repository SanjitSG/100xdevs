const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret123";

const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "sanjit@gmail.com",
    password: "123",
    name: "Sanjit Gawade",
  },
  {
    username: "mira@gmail.com",
    password: "123321",
    name: "Mira John",
  },
  {
    username: "ang@gmail.com",
    password: "123321",
    name: "kundan mishra",
  },
];

function userExists(username, password) {
  return ALL_USERS.find((user) => user.username === username && user.password === password);
}

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({
      message: "Invalid username or password",
    });
  }

  // generate token
  const token = jwt.sign({ username: username }, jwtPassword);
  return res.status(200).json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(token, jwtPassword);
    const username = decode.username;
    // returns all users
    return res.status(200).json({
      users: ALL_USERS.filter((user) => user.username != username),
    });
  } catch {
    return res.status(403).json({
      message: "Invalid token",
    });
  }
});

app.listen(3000);
