import { creatingBase } from "../view/base";

function gettingButtons() {
  const addBtn = document.querySelector(".add-btn");
  const popup = document.querySelector(".popup");
  const popupContent = document.querySelector(".popup-content");
  const cancelBtn = document.querySelector(".cancel-btn");
  const submitBtn = document.getElementById("submit");
  const projects = document.querySelector(".projects");
  const allTaskBtn = document.querySelector(".btn-0");
  const todayBtn = document.querySelector(".btn-1");
  const dueDateBtn = document.querySelector(".btn-2");
  const importantBtn = document.querySelector(".btn-3");
  const completeBtn = document.querySelector(".btn-4");
  const addProjectButton = document.querySelector(".add-project");
  const projectForm = document.querySelector(".project-form");
  const submitProject = document.getElementById("project-submit");
  const projectInput = document.getElementById("project-input");
  const cancelProject = document.querySelector(".cancel-project");

  let btnGrp = [
    addBtn,
    allTaskBtn,
    todayBtn,
    dueDateBtn,
    importantBtn,
    completeBtn,
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
    todayBtn,
    dueDateBtn,
    importantBtn,
    completeBtn,
    btnGrp,
    addProjectButton,
    submitProject,
    cancelProject,
    projectForm,
    projectInput,
  };
}

export { gettingButtons };
