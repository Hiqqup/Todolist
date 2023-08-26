interface TaskData {
  name: string,
  time: {
    counter: number,
    interval: NodeJS.Timeout
  },
  noteContent: {
    text: string
  };
}
interface ProjectType {
  name: string,
  tasks: Array<TaskData>
}
export { TaskData, ProjectType };
