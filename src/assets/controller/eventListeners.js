import { addTask, tasks } from "../model/class";
import { gettingButtons } from "../model/elements";
import {
  creatingProjectList,
  submitButtonFunctionality,
  hideProjectFunctionality,
  gettingProjectsFunctionality,
  submitTodoForm,
  addTodo,
  hidingTodoForm,
  creatingTodos,
} from "./eventFunction";

function submitForm() {
  const submit = gettingButtons().submitBtn;
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    submitTodoForm();
    creatingTodos();
  });
}

function popUpFunctionality() {
  const add = gettingButtons().addBtn;
  add.addEventListener("click", function () {
    addTodo();
  });
}

function popupCloseFunctionality() {
  const cancel = gettingButtons().cancelBtn;
  cancel.addEventListener("click", function () {
    hidingTodoForm();
  });
}

function gettingProjects() {
  const addProject = gettingButtons().addProjectButton;
  addProject.addEventListener("click", function () {
    gettingProjectsFunctionality();
  });
}

function hideProjectForm() {
  const cancelProject = gettingButtons().cancelProject;
  cancelProject.addEventListener("click", function () {
    hideProjectFunctionality();
  });
}

function creatingProject() {
  const submitProject = gettingButtons().submitProject;
  submitProject.addEventListener("click", function () {
    submitButtonFunctionality();
    creatingProjectList();
  });
}

export {
  gettingProjects,
  hideProjectForm,
  creatingProject,
  popUpFunctionality,
  submitForm,
  popupCloseFunctionality,
};
