const express = require("express");

const app = express();

const todoList = ["i am gautam ", "i like javascript"];
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to The Todo app");
});
// server for backend
app.get("/todos", (req, res) => {
  res.send(todoList);
});
app.post("/todos", (req, res) => {
  let newTodo = req.body.name;
  todoList.push(newTodo);
  res.status(201).send(todoList);
});

app.delete("/todos", (req, res) => {
  let deleteTodo = req.body.name;

  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i] === deleteTodo) {
      todoList.splice(i, 1);
      console.log(todoList);
      res.status(204).send(todoList);
    }
  }
});
app.all("/todos", (req, res) => {
  res.status(501).send();
});
app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running at port :", PORT);
});
