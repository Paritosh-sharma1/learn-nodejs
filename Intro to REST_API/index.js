const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/users", (req, res) => {
  const html = `
      <ul>
          ${users.map((user) => `<li> ${user.first_name}</li>`).join("")}
      </ul>
    `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  //TODO: Create new user
  return res.json({ status: Pending });
});

app.patch("/api/users/:id", (req, res) => {
  //TODO: Edit the user with id
  return res.json({ status: Pending });
});

app.delete("/api/users/:id", (req, res) => {
  //TODO: Delete the user with the id
  return res.json({ status: Pending });
});

app.listen(port, () => {
  console.log(`🚀 Server is listening on port ${port}`);
});
