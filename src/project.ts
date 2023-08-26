import { TaskData } from "./types";
const projectSelecter: HTMLSelectElement = document.querySelector("#project");
function Project(name: string, tasks?: Array<TaskData>) {
  projectSelecter.innerHTML += `<option value=${name}>${name}</option>`;
  projectSelecter.value = name;
  console.log("value set");

  return { name, tasks }
}
export { Project }
