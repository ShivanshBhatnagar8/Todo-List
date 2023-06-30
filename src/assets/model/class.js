import { creatingBase } from "../view/base";

class Project {
  constructor(project) {
    this.project = project;
  }
  setName(project) {
    return (this.project = project);
  }

  getName() {
    return this.project;
  }
}

function getProject(project) {
  let projectName = new Project(project);
  const getProjectName = projectName.getName();
  const setProjectName = projectName.setName(project);
  return { project, projectName, getProjectName, setProjectName };
}

class Todo extends Project {
  constructor(project, title, description, date, priority) {
    super(project);
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

function addTask(project, title, description, date, priority) {
  let task = new Todo(project, title, description, date, priority);

  taskList.push(task);
  return { task };
}

export { Todo, addTask, getProject, taskList };
