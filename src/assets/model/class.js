class Project {
  constructor(project) {
    this.project = project;
  }
}

function createProject(name, array) {
  let project = new Project(name); //creating project object
  project.taskList = []; // adding taskList array to store task later
  array.push(project); //pushing project object in an array
}

class Todo extends Project {
  constructor(project, title, description, date, priority) {
    super(project);
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

function createTask(project, title, description, date, priority, array) {
  let task = new Todo(project, title, description, date, priority);
  array.forEach((el) => {
    if (el.project === task.project) {
      el.taskList.push(task);
    }
  });
  localStorage.setItem("projects", JSON.stringify(array));
  return { task };
}

export { Todo, Project, createTask, createProject };
