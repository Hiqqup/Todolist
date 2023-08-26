import { Task } from "./task";
import { Project } from "./project";

const projects = localStorage.getItem("projects") === null ? [Project("My first project", [])] :
  JSON.parse(localStorage.getItem("projects"));

function addToStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export { projects, addToStorage };

