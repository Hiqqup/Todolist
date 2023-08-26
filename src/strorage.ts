import { TaskData } from "./types";

const tasks: Array<TaskData> = localStorage.getItem("tasks") === null ? [] : JSON.parse(localStorage.getItem("tasks"));

function addToStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export { tasks, addToStorage };

