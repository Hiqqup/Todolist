import { Task } from './task';
const newTask = document.querySelector("#new-task");
const input: HTMLInputElement = document.querySelector("#task-namer");
newTask.addEventListener("click", () => {
  if (input.className == "hidden") {
    input.classList.remove("hidden");
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

let tasks = [];
function submit() {
  if (input.checkValidity()) {
    input.classList.add("hidden");
    tasks.push(Task(input.value));
    console.log(tasks);
    input.value = "";
  }
  else {
    input.reportValidity();
  }
}

//temporary loop
for (let i = 0; i < 3; i++) {
  tasks.push(Task('' + i));
}
