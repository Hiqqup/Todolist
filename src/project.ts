import { TaskData, ProjectType } from "./types";
const projectSelecter: HTMLSelectElement = document.querySelector("#project");
function Project(name: string, tasks?: Array<TaskData>, project?: ProjectType) {
  projectSelecter.innerHTML += `<option value=${name}>${name}</option>`;
  projectSelecter.selectedIndex = projectSelecter.querySelectorAll("option").length - 1;

  tasks = undefined ?? [];
  project = undefined ?? {
    name: name,
    tasks: tasks
  }

  return project
}
export { Project }

// project selection
import { updateIndex, addToStorage, projects, index } from "./strorage";
import { Task } from "./task";
const tasksDiv = document.querySelector(".tasks");
projectSelecter.selectedIndex = index;
projectSelecter.addEventListener("input", () => {
  updateIndex(projectSelecter.selectedIndex);
  tasksDiv.innerHTML = '';
  projects[index].tasks.forEach(task => {
    console.log(task);
    task = Task(task.name, task);
  });
});
//project deletion
const deleteButton: HTMLButtonElement = document.querySelector("#delete-project");
deleteButton.addEventListener("click", () => {
  if (projectSelecter.querySelectorAll("option").length > 1) {
    const selectedIndex = projectSelecter.selectedIndex;
    projects.splice(selectedIndex, 1);
    projectSelecter.removeChild(projectSelecter.querySelectorAll("option")[selectedIndex]);
    updateIndex(projectSelecter.selectedIndex);
    addToStorage();
  }
  else {
    alert("You need to have at least 1 project");
  }
});
