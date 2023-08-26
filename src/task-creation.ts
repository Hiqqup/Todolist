import { Task } from './task';
import { tasks, addToStorage } from "./strorage";
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
tasks.forEach((task) => {
  Task(task.name, task)
});

function submit() {
  if (input.checkValidity() && checkName()) {
    input.classList.add("hidden");
    tasks.push(Task(input.value));
    input.value = "";
    addToStorage();
  }
  else {
    input.reportValidity();
  }
}
function checkName() {
  for (let i = 0; i < tasks.length; i++) {
    if (input.value == tasks[i].name) {
      alert("think of another name");
      return false;
    }
  }
  return true;
}

