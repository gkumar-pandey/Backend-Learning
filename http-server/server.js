const http = require("http");
// Creating Todo server using nodeJs
let TodoList = ["i am gautam ", "i am a programmer "];

// console.log(TodoList.toString());

const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;

  if (url === "/todos") {
    if (method == "GET") {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(TodoList.toString());
      res.end();
    } else if (method == "POST") {
      let body = "";
      req
        .on("error", (err) => {
          console.log(err);
        })
        .on("data", (chunk) => {
          body += chunk;
        })
        .on("end", () => {
          body = JSON.parse(body);
          let newTodo = body.name;
          TodoList.push(newTodo);
          console.log(TodoList);
          res.writeHead(201);
          res.write(TodoList.toString());
          res.end();
        });
    } else if (method == "DELETE") {
      let body = "";

      req
        .on("error", (err) => {
          console.log(err);
        })
        .on("data", (chunk) => {
          body += chunk;
        })
        .on("end", () => {
          body = JSON.parse(body);
          let deleteTodo = body.name;
          for (let i = 0; i < TodoList.length; i++) {
            if (TodoList[i] == deleteTodo) {
              TodoList.splice(i, 1);
            }
          }
          res.writeHead(204);
          console.log(TodoList);
          res.write(TodoList.toString());
          res.end();
        });
    } else {
      res.writeHead(501);
      res.write("Not implemented");
      res.end();
    }
  } else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

server.listen(5000, () => {
  console.log(`Server is running at port: 5000`);
});
