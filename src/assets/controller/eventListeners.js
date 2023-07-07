import { createTask, createProject } from "../model/class";
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
  allTaskFunctionality,
} from "./eventFunction";

let projectHolder = []; //Array to hold the projects and it's respective tasks

//Showing form to fill where user can fill up the details of the tasks
function popUpFunctionality() {
  const add = gettingButtons().addBtn;
  add.addEventListener("click", function () {
    addTodo();
  });
}
/********************************************************** */

//Hiding form to fill where user can fill up the details of the tasks
function popupCloseFunctionality() {
  const cancel = gettingButtons().cancelBtn;
  cancel.addEventListener("click", function () {
    hidingTodoForm();
  });
}
/****************************************************************** */

//showing form to get user input to create project later
function gettingProjects() {
  const addProject = gettingButtons().addProjectButton;
  addProject.addEventListener("click", function () {
    gettingProjectsFunctionality();
  });
}
/****************************************************************** */

//Hide the project form on clicking cancel button
function hideProjectForm() {
  const cancelProject = gettingButtons().cancelProject;
  cancelProject.addEventListener("click", function () {
    hideProjectFunctionality();
  });
}
/****************************************************************** */

function creatingProject() {
  const submitProject = gettingButtons().submitProject;
  const projectInput = gettingButtons().projectInput;
  submitProject.addEventListener("click", function () {
    createProject(projectInput.value, projectHolder); //function to create project Object and add the object to an array
    submitButtonFunctionality(); // submit the form
    creatingProjectList(projectHolder); //creates projectList
  });
}

/* Deleting task and  project from the app*/
function removingProject(element) {
  const projectContainer = gettingButtons().projectContainer;
  const projectInput = gettingButtons().projectInput;
  const cardSection = gettingButtons().cardSection;
  const mainHeading = gettingButtons().mainHeading;
  const addBtn = gettingButtons().addBtn;
  element.addEventListener("click", function (e) {
    projectInput.value = "";
    e.stopPropagation();
    addBtn.style.zIndex = 0;
    projectContainer.removeChild(e.target.parentElement);

    //Removing tasks from the main section which is linked to particular project
    let arr = Array.from(cardSection.childNodes).filter(
      (el) => el.dataset.value === e.target.previousElementSibling.textContent
    );
    for (let i = 0; i < arr.length; i++) {
      cardSection.removeChild(arr[i]);
    }
    /**************************************************************** */

    //Resetting main Section heading
    if (
      mainHeading.textContent === e.target.previousElementSibling.textContent
    ) {
      mainHeading.textContent = "";
    }
    /***************************************************************** */

    projectHolder = projectHolder.filter(
      (el) => el.project !== e.target.previousElementSibling.textContent
    );
    localStorage.removeItem("projects");
  });
}
/********************************************************************************** */

//Changing h3 element textContent and todo-card element display property
function appendingMainSection(element) {
  const addBtn = gettingButtons().addBtn;
  const mainHeading = gettingButtons().mainHeading;
  const cardSection = gettingButtons().cardSection;
  element.addEventListener("click", function (e) {
    addBtn.style.zIndex = 2;
    mainHeading.textContent = e.target.childNodes[0].textContent;

    //To-do card display property changing functionality
    if (cardSection.childNodes.length !== 0) {
      cardSection.childNodes.forEach((el) => {
        if (el.dataset.value !== mainHeading.textContent) {
          el.style.display = "none";
        } else if (el.dataset.value === mainHeading.textContent) {
          el.style.display = "flex";
        }
      });
    }
    localStorage.setItem("projects", JSON.stringify(projectHolder)); //setting local storage again when it get deleted
  });
}
/*********************************************************************************************** */

function submitForm() {
  const submit = gettingButtons().submitBtn;
  const mainHeading = gettingButtons().mainHeading;
  submit.addEventListener("click", function (e) {
    createTask(
      mainHeading.textContent,
      title.value,
      description.value,
      date.value,
      priority.value,
      projectHolder
    ); //creating task object and adding it to an array
    submitTodoForm(); //hide the form on submission
    creatingTodos(projectHolder, mainHeading.textContent); //creating Todo-card
  });
}
/********************************************************************************************** */

//To change the priority of the task
function changingPriority(element) {
  element.childNodes[0].addEventListener("click", function () {
    if (element.childNodes[0].style.stroke === "gold") {
      element.childNodes[0].style.stroke = "white";
    } else if (element.childNodes[0].style.stroke !== "gold") {
      element.childNodes[0].style.stroke = "gold";
    }
  });
}
/************************************************************************ */
let newAr = [];
//Deleting the particular task
function deletingTask(element1, element2) {
  element1.childNodes[1].nextElementSibling.addEventListener(
    "click",
    function () {
      element2.removeChild(element1.parentElement.parentElement); //Removing the particular todo card

      //Removing the task object from the tasklist array if it match which removed todo-card title
      const todoCardTitle =
        element1.parentElement.parentElement.childNodes[1].textContent;
      projectHolder.forEach((el) => {
        el.taskList = el.taskList.filter((e) => e.title !== todoCardTitle);
      });
      localStorage.setItem("projects", JSON.stringify(projectHolder));
    }
  );
}
/*************************************************************************** */

//Marking the task to complete and vice-versa
function changingTaskStatus(element) {
  element.childNodes[0].addEventListener("click", function () {
    if (element.childNodes[0].style.backgroundColor !== "green") {
      element.childNodes[0].textContent = "Task Completed";
      element.childNodes[0].style.backgroundColor = "green";
    } else if (element.childNodes[0].style.backgroundColor !== "red") {
      element.childNodes[0].textContent = "Mark Complete";
      element.childNodes[0].style.backgroundColor = "red";
    }
  });
}
/****************************************************************** */

//Showing all task
function showingAllTasks() {
  const allTaskbtn = gettingButtons().allTaskBtn;
  allTaskbtn.addEventListener("click", function () {
    allTaskFunctionality();
  });
}
/*************************************************************** */

//Getting Local Storage
function getLocalStorage() {
  let data = localStorage.getItem("projects");
  data = JSON.parse(data); //changing string to object again
  if (data) {
    data.forEach((el) => {
      projectHolder.push(el); //pushing data again to project holder array
      creatingProjectList(projectHolder); //calling function to projects
    });
    creatingTodos(data); //creating tasks
  }
}
/******************************************************************* */

export {
  gettingProjects,
  hideProjectForm,
  creatingProject,
  popUpFunctionality,
  submitForm,
  popupCloseFunctionality,
  showingAllTasks,
  removingProject,
  appendingMainSection,
  changingPriority,
  deletingTask,
  getLocalStorage,
  changingTaskStatus,
};
