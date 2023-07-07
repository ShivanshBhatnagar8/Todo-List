import { creatingBase } from "../view/base";

function gettingButtons() {
  const addBtn = document.querySelector(".add-btn");
  const popup = document.querySelector(".popup");
  const popupContent = document.querySelector(".popup-content");
  const cancelBtn = document.querySelector(".cancel-btn");
  const submitBtn = document.getElementById("submit");
  const projects = document.querySelector(".projects");
  const allTaskBtn = document.querySelector(".btn-0");
  const addProjectButton = document.querySelector(".add-project");
  const projectForm = document.querySelector(".project-form");
  const submitProject = document.getElementById("project-submit");
  const projectInput = document.getElementById("project-input");
  const cancelProject = document.querySelector(".cancel-project");
  const section = document.querySelector(".main-section");
  const mainContainer = document.querySelector(".main-container");
  const mainHeading = document.querySelector("h3");
  const cardSection = document.querySelector(".card-section");
  const projectTitle = document.querySelectorAll(".project-name");
  const projectContainer = document.querySelector(".project-container");
  const projectListAll = document.querySelectorAll(".project-list");
  const projectList = document.querySelector(".project-list");
  const todoCard = document.querySelectorAll(".todo-card");
  const projectIconAll = document.querySelectorAll(".delete-project");
  const taskPriority = document.querySelector(".task-priority");
  const taskDelete = document.querySelector(".task-delete");
  const taskPriorityAll = document.querySelectorAll(".task-priority");
  const taskDeleteAll = document.querySelectorAll(".task-delete");
  const taskStatusBtnAll = document.querySelectorAll(".task-btn");
  const projectIcon = document.querySelector(".delete-project");
  let btnGrp = [
    addBtn,
    allTaskBtn,
    addProjectButton,
    submitProject,
    cancelProject,
  ];

  return {
    addBtn,
    popup,
    popupContent,
    cancelBtn,
    submitBtn,
    projects,
    allTaskBtn,
    btnGrp,
    addProjectButton,
    submitProject,
    cancelProject,
    projectForm,
    projectInput,
    projectContainer,
    section,
    mainContainer,
    mainHeading,
    projectTitle,
    cardSection,
    projectListAll,
    projectList,
    todoCard,
    projectIconAll,
    taskPriority,
    taskDelete,
    taskPriorityAll,
    taskDeleteAll,
    taskStatusBtnAll,
    projectIcon,
  };
}

export { gettingButtons };
