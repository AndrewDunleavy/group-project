const express = require("express");
const { sequelize, ToDoList, Task } = require("./to-do-list", "./tasks");
const toDoListRoutes = require("./Routes/toDoList.route");
const taskRoutes = require("./Routes/tasks.route");
const app = express();

//http://localhost:4000/toDoList

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/toDoList", toDoListRoutes); // all To Do Lists
app.use("/toDoList/:list_id", toDoListRoutes); // one To Do List
app.use("/toDoList/:list_id/tasks", taskRoutes); // all tasks  
app.use("/toDoList/:list_id/tasks/:tasks_id", taskRoutes); // one task list

app.listen({ port: 4000 }, async () => {
  console.log("Server up on http://localhost:4000");
  await sequelize.authenticate();
  console.log("Database Connected!");
});


