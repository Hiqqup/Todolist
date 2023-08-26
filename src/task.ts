import { TaskData } from "./types";


const tasksDiv = document.querySelector(".tasks");
function Task(name: string, taskData?: TaskData) {
  const container = document.createElement("div");
  const title = document.createElement("h2");
  const timer = document.createElement("p");
  const notes = document.createElement("button");
  const cut = document.createElement("button");
  const play = document.createElement("button");

  container.classList.add("task");
  play.classList.add("play_arrow");
  title.textContent = name;
  notes.innerHTML = '<span class="material-symbols-outlined">description</span>'
  cut.innerHTML = '<span class="material-symbols-outlined">delete</span>'
  play.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>'
  container.appendChild(title);
  container.appendChild(timer);
  container.appendChild(play);
  container.appendChild(notes);
  container.appendChild(cut);
  tasksDiv.appendChild(container);


  if (!taskData) {
    taskData = {
      name,
      time: {
        counter: 0,
        interval: null
      },
      noteContent: {
        text: ''
      },
    }
  }
  if (taskData.time.counter) {
    console.log("i have time");
    timer.textContent = displayTime(taskData.time.counter);
  }
  cut.addEventListener("click", () => cutTask(container, taskData));
  play.addEventListener("click", () => toggleTimer(play, timer, taskData.time));
  notes.addEventListener("click", () => toggleNotes(name, taskData.noteContent));

  return taskData;
}
export { Task };

import { toggleTimer, displayTime } from "./time";
import { toggleNotes } from "./notes";
import { cutTask } from "./cut-task";
