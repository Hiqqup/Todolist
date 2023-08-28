import { TaskData } from "./types"
import { addToStorage, projects, index } from "./strorage";

function cutTask(container: HTMLDivElement, taskData: TaskData) {
  for (let i = 0; i < projects[index].tasks.length; i++) {

    if (projects[index].tasks[i].name == taskData.name) {
      console.log(i);
      projects[index].tasks.splice(i, 1);
    }

  }
  container.remove();
  addToStorage();
}
export { cutTask };
