import { Project } from "./project";
import { projects, addToStorage, updateIndex } from "./strorage";

const addProject = document.querySelector("#new-project");
const projectNamer: HTMLInputElement = document.querySelector("#project-namer");
const projectSelecter: HTMLSelectElement = document.querySelector("#project");
addProject.addEventListener("click", () => {
  if (projectNamer.className == "hidden") {
    projectNamer.classList.remove("hidden")
    projectNamer.focus();
  }
  else {
    submit()
    updateIndex(projectSelecter.selectedIndex);
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
    addToStorage();
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

