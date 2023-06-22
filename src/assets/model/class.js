import { creatingBase } from "../view/base";

class Todo {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
  getTitle() {
    return this.title;
  }
  setTitle(title) {
    return (this.title = title);
  }
  getDescription() {
    return this.description;
  }
  setDescription() {
    return (this.description = description);
  }
  getDueDate() {
    return this.date;
  }
  setDueDate(date) {
    return (this.date = date);
  }
  getPriority() {
    return this.priority;
  }
  setPriority(priority) {
    return (this.priority = priority);
  }
}
let tasks = [];

function addTask() {
  let task = new Todo(
    title.value,
    description.value,
    date.value,
    priority.value
  );
  const taskTitle = task.getTitle();
  const taskDescription = task.getDescription();
  const taskDate = task.getDueDate();
  const taskPriority = task.getPriority();
  tasks.push(task);
  return { task, tasks, taskTitle, taskDescription, taskDate, taskPriority };
}

export { Todo, addTask, tasks };
