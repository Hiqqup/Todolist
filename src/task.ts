import { toggleTimer } from "./time-management";
const tasksDiv = document.querySelector(".tasks");
function Task(name: string) {
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



  let time = {
    counter: 0,
    interval: null
  };
  cut.addEventListener("click", () => cutTask(container));
  play.addEventListener("click", () => {
    toggleTimer(play, timer, time)
  });

  return { name }
}

function cutTask(container: HTMLDivElement) {
  container.remove();
}



export { Task };
