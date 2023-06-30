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

export { Todo, Project };
