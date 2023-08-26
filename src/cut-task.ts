import { TaskData } from "./types"
import { addToStorage, projects } from "./strorage";

function cutTask(container: HTMLDivElement, taskData: TaskData) {
  for (let i = 0; i < projects[0].length; i++) {

    if (projects[0].tasks[i].name == taskData.name) {
      console.log(i);
      projects[0].tasks.splice(i, 1);
    }

  }
  container.remove();
  addToStorage();
}
export { cutTask };
