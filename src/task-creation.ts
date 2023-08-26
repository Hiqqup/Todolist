import { Task } from './task';
import { addToStorage, projects } from "./strorage";
const newTask = document.querySelector("#new-task");
const input: HTMLInputElement = document.querySelector("#task-namer");
newTask.addEventListener("click", () => {
  if (input.className == "hidden") {
    input.classList.remove("hidden");
    input.focus();
  }
  else {
    submit();
  }

});
input.addEventListener("keypress", (e: KeyboardEvent) => {
  if (e.key == "Enter") {
    submit()
  }

});


function submit() {
  if (input.checkValidity() && checkName()) {
    input.classList.add("hidden");
    projects[0].tasks.push(Task(input.value));
    input.value = "";
    addToStorage();
  }
  else {
    input.reportValidity();
  }
}
function checkName() {
  for (let i = 0; i < projects[0].tasks.length; i++) {
    if (input.value == projects[0].tasks[i].name) {
      alert("think of another name");
      return false;
    }
  }
  return true;
}

