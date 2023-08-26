import { Project } from "./project";
import { projects } from "./strorage";
import { ProjectType, TaskData } from "./types";
import { Task } from "./task";

const addProject = document.querySelector("#new-project");
const projectNamer: HTMLInputElement = document.querySelector("#project-namer");
addProject.addEventListener("click", () => {
  if (projectNamer.className == "hidden") {
    projectNamer.classList.remove("hidden")
    projectNamer.focus();
  }
  else {
    submit()
  }
});
projectNamer.addEventListener("keypress", (e: KeyboardEvent) => {
  if (e.key == "Enter") {
    submit()
  }

});

function submit() {
  if (projectNamer.checkValidity() && checkName()) {
    projectNamer.classList.add("hidden");
    projects.push(Project(projectNamer.value));
    projectNamer.value = "";
    //addToStorage();
  }
  else {
    projectNamer.reportValidity();
  }
}

function checkName() {
  for (let i = 0; i < projects.length; i++) {
    if (projectNamer.value == projects[i].name) {
      alert("think of another name");
      return false;
    }
  }
  return true;
}

projects.forEach((project: ProjectType) => {
  project = Project(project.name, project.tasks);
  project.tasks.forEach((task: TaskData) => {
    task = Task(task.name, task);
  });
});
//the dreaded project array
