import { gettingButtons } from "../model/elements";
import {
  appendingMainSection,
  changingPriority,
  changingTaskStatus,
  deletingTask,
  removingProject,
} from "./eventListeners";

//Showcase the form to type Project Name
function gettingProjectsFunctionality() {
  const addProject = gettingButtons().addProjectButton;
  const projectInput = gettingButtons().projectInput;
  const projectForm = gettingButtons().projectForm;
  const projects = gettingButtons().projects;
  addProject.href = `#${projects.id}`;
  projectForm.style.display = "flex";
  projectForm.style.height = "auto";
  projectForm.classList.remove("hidden");
  projectForm.classList.add("slide-down");
  projectInput.value = "";
}
/*************************************************** */

//Hiding the form functionality
function hideProjectFunctionality() {
  const projectForm = gettingButtons().projectForm;
  const projects = gettingButtons().projects;
  const cancelProject = gettingButtons().cancelProject;
  cancelProject.href = `#${projects.id}`;
  projectForm.style.display = "none";
  projectForm.style.height = 0;
  projectForm.classList.add("hidden");
  projectForm.classList.remove("slide-down");
}
/********************************************************************** */

/* Submit button functionality to submit form which is required to create the project list  */
function submitButtonFunctionality() {
  const projects = gettingButtons().projects;
  const projectForm = gettingButtons().projectForm;
  const submitProject = gettingButtons().submitProject;
  submitProject.href = `#${projects.id}`;
  projectForm.style.display = "none";
  projectForm.style.height = 0;
  projectForm.classList.add("hidden");
  projectForm.classList.remove("slide-down");
}

/********************************************************** */
/* This function creates the project list*/
function creatingProjectList(array) {
  const projectContainer = gettingButtons().projectContainer;
  array.forEach((el, i) => {
    if (i === array.length - 1) {
      const projectList = document.createElement("div");
      projectList.classList.add("project-list");
      projectList.style.zIndex = 2;
      const projectName = document.createElement("p");
      const projectIcon = document.createElement("a");
      projectName.classList.add("project-name");
      projectName.textContent = el.project; //From a class
      projectIcon.innerHTML = `&Cross;`;
      projectIcon.classList.add("delete-project");
      projectList.append(projectName, projectIcon);
      projectContainer.append(projectList);

      removingProject(projectIcon); //calling removeProject() to remove the project List
      appendingMainSection(projectList);
    }
  });
}
/******************************************************************************************************/

//Setting the z-Index css property of the buttons
function settingZIndex(el1, el2, el3, el4, el5, number) {
  let elements = [el1, el2, el3, el4, el5];
  elements.forEach((element) => {
    element.forEach((el) => {
      if (el !== undefined) {
        //checking if the dom element is not undefined
        el.style.zIndex = number;
      }
    });
  });
}

/*************************************************************************************************** */

//Showing form on which user can fill the details about the task
function addTodo() {
  const btns = gettingButtons().btnGrp;
  const popupVisible = gettingButtons().popup;
  const popupContentVisible = gettingButtons().popupContent;
  const projectListAll = gettingButtons().projectListAll;
  const taskPriorityAll = gettingButtons().taskPriorityAll;
  const taskDeleteAll = gettingButtons().taskDeleteAll;
  const taskStatusBtnAll = gettingButtons().taskStatusBtnAll;
  popupVisible.classList.remove("hidden");
  popupContentVisible.classList.remove("hidden", "scale");
  settingZIndex(
    projectListAll,
    taskDeleteAll,
    taskPriorityAll,
    taskStatusBtnAll,
    btns,
    0
  ); //calling this method to manipulate the z-Index of the elements
}
/*************************************************************************************************** */

//Submit the form to create the task after clicking form submit button
function submitTodoForm() {
  const btns = gettingButtons().btnGrp;
  const popupVisible = gettingButtons().popup;
  const popupContentVisible = gettingButtons().popupContent;
  const projectListAll = gettingButtons().projectListAll;
  const taskPriorityAll = gettingButtons().taskPriorityAll;
  const taskDeleteAll = gettingButtons().taskDeleteAll;
  const taskStatusBtnAll = gettingButtons().taskStatusBtnAll;
  popupVisible.classList.add("hidden");
  popupContentVisible.classList.add("hidden", "scale");
  settingZIndex(
    projectListAll,
    taskDeleteAll,
    taskPriorityAll,
    taskStatusBtnAll,
    btns,
    2
  ); //calling this method to manipulate the z-Index of the elements
}
/*************************************************************************** */

//Remove the form if user click on cancel button on the form
function hidingTodoForm() {
  const btns = gettingButtons().btnGrp;
  const popupVisible = gettingButtons().popup;
  const popupContentVisible = gettingButtons().popupContent;
  const projectListAll = gettingButtons().projectListAll;
  const taskPriorityAll = gettingButtons().taskPriorityAll;
  const taskDeleteAll = gettingButtons().taskDeleteAll;
  const taskStatusBtnAll = gettingButtons().taskStatusBtnAll;
  popupVisible.classList.add("hidden");
  popupContentVisible.classList.add("hidden", "scale");
  settingZIndex(
    projectListAll,
    taskDeleteAll,
    taskPriorityAll,
    taskStatusBtnAll,
    btns,
    2
  ); //calling this method to manipulate the z-Index of the elements
}
/******************************************************************************************* */

//Creating Todo-Card on the main Section of the app
function creatingTodos(array) {
  const mainHeading = gettingButtons().mainHeading;
  array.forEach((el) => {
    el.taskList.forEach((e, i) => {
      /*Following reasons for the if statement
       -checking mainHeading for data from local Storage
       -mainHeading should be equal to project Name
       -last one is implemented so that only one todo will be created at click */
      if (
        mainHeading.textContent === "" ||
        (mainHeading.textContent === e.project && i === el.taskList.length - 1)
      ) {
        const cardSection = gettingButtons().cardSection;
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");
        todoCard.id = "todoCard";
        todoCard.dataset.value = el.project;
        cardSection.appendChild(todoCard);
        const taskTitleHeading = document.createElement("span");
        taskTitleHeading.classList.add("task-title-heading");
        taskTitleHeading.textContent = "Title";
        const taskTitle = document.createElement("p");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = e.title;
        const descriptionHeading = document.createElement("span");
        descriptionHeading.classList.add("description-heading");
        descriptionHeading.textContent = "Description";
        const taskDescription = document.createElement("p");
        taskDescription.classList.add("task-description");
        taskDescription.textContent = e.description;
        const dateHeading = document.createElement("span");
        dateHeading.classList.add("date-heading");
        dateHeading.textContent = "Due Date";
        const taskDate = document.createElement("p");
        taskDate.classList.add("task-date");
        taskDate.textContent = e.date;
        const taskEventHandlers = document.createElement("div");
        taskEventHandlers.classList.add("task-event-container");
        const taskBtn = document.createElement("a");
        taskBtn.classList.add("task-btn");
        taskBtn.href = "#todoCard";
        taskBtn.textContent = "Mark Complete";
        const taskIconContainer = document.createElement("div");
        taskIconContainer.classList.add("task-icon-holder");
        taskIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="task-priority" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="task-delete" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>`;
        taskEventHandlers.append(taskBtn, taskIconContainer);
        todoCard.append(
          taskTitleHeading,
          taskTitle,
          descriptionHeading,
          taskDescription,
          dateHeading,
          taskDate,
          taskEventHandlers
        );

        if (e.priority === "Important") {
          taskIconContainer.childNodes[0].style.stroke = "gold";
        }

        changingPriority(taskIconContainer); //To change the priority of the todo
        deletingTask(taskIconContainer, cardSection); //To delete the particular todo
        changingTaskStatus(taskEventHandlers); //To mark whether task is completed
      }
    });
  });
}
/****************************************************************** */

//To show all the todo-cards on the main Section
function allTaskFunctionality() {
  const mainHeading = gettingButtons().mainHeading;
  const todoCards = gettingButtons().todoCard;
  if (mainHeading.textContent !== "") {
    mainHeading.textContent = "";
    todoCards.forEach((el) => (el.style.display = "flex"));
  }
}
/***************************************************************************** */

export {
  submitButtonFunctionality,
  creatingProjectList,
  hideProjectFunctionality,
  gettingProjectsFunctionality,
  submitTodoForm,
  addTodo,
  hidingTodoForm,
  creatingTodos,
  allTaskFunctionality,
};
