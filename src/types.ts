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
export { TaskData };
