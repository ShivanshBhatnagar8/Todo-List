import { creatingBase } from "../view/base";

class Project {
  constructor(name) {
    this.name = name;
  }
  setName(name) {
    return (this.name = name);
  }

  getName() {
    return this.name;
  }
}

function getProject(name) {
  let project = new Project(name);
  const getProjectName = project.getName();
  const setProjectName = project.setName(name);
  return { project, project, getProjectName, setProjectName };
}

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
let taskList = [];

function addTask(title, description, date, priority) {
  let task = new Todo(title, description, date, priority);

  taskList.push(task);
  return { task, taskList };
}

export { Todo, addTask, getProject, taskList };
