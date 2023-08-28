import { Task } from "./task";
import { Project } from "./project";
import { ProjectType } from "./types";

let index: number = (localStorage.getItem("index") === null) ?
  0 : Number(JSON.parse(localStorage.getItem("index")));
let projects: Array<ProjectType>;
if (localStorage.getItem("projects") === null ||
  JSON.parse(localStorage.getItem("projects")) < 0
) {
  projects = [Project("FirstProject")]
}
else {
  projects = JSON.parse(localStorage.getItem("projects"));
  repopulate();

}

function addToStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}
function updateIndex(i: number) {
  index = i;
  localStorage.setItem("index", JSON.stringify(index));
}
function repopulate() {

  projects.forEach(project => {
    project = Project(project.name, project.tasks);
  });

  projects[index].tasks.forEach(task => {
    task = Task(task.name, task);
  });
}

export { index, projects, addToStorage, updateIndex };

