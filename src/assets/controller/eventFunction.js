import { gettingButtons } from "../model/elements";
import { Project, Todo } from "../model/class";

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
let projectHolder = [];
/* This function creates the project list*/
function creatingProjectList() {
  const projectInput = gettingButtons().projectInput;
  let project = new Project(projectInput.value);
  const mainSection = gettingButtons().section;
  const addBtn = gettingButtons().addBtn;
  const projectContainer = gettingButtons().projectContainer;
  const mainHeading = gettingButtons().mainHeading;
  const cardSection = gettingButtons().cardSection;
  const projectList = document.createElement("div");
  projectList.classList.add("project-list");
  projectList.style.zIndex = 2;
  const projectName = document.createElement("p");
  const projectIcon = document.createElement("a");
  projectName.classList.add("project-name");
  projectName.textContent = project.project; //From a class
  projectIcon.innerHTML = `&Cross;`;
  projectIcon.classList.add("delete-project");
  projectList.append(projectName, projectIcon);
  project.arr = [];
  projectHolder.push(project);
  projectContainer.append(projectList);

  /** FOR LOCAL STORAGE */

  /**************************************** */

  //Appending project on main section

  const projectListAll = gettingButtons().projectListAll;
  if (projectListAll.length === 1) {
    projectList.addEventListener("click", function (e) {
      addBtn.style.zIndex = 2;

      e.target.classList.add("active");
      if (e.target.classList.contains("active")) {
        mainHeading.textContent = e.target.childNodes[0].textContent;
      }
    });
  }
  //if we have more than one projects
  if (projectListAll.length > 1) {
    projectListAll.forEach((el) => {
      el.addEventListener("click", function (e) {
        addBtn.style.zIndex = 2;
        e.target.classList.add("active");

        if (e.target.classList.contains("active")) {
          mainHeading.textContent = e.target.childNodes[0].textContent;
        }

        let siblings = [...projectListAll].filter(
          (child) => child !== e.target
        );
        siblings.forEach((el) => el.classList.remove("active"));

        if (cardSection.childNodes.length !== 0) {
          cardSection.childNodes.forEach((el) => {
            if (el.dataset.value !== mainHeading.textContent) {
              el.style.display = "none";
            } else if (el.dataset.value === mainHeading.textContent) {
              el.style.display = "flex";
            }
          });
        }
      });
    });
    /*Setting Local Storage */

    addBtn.style.zIndex = 2;
  }
  /************************************************** */
  //This is to delete the particular project

  projectIcon.addEventListener("click", function (e) {
    projectInput.value = "";
    e.stopPropagation();
    projectContainer.removeChild(e.target.parentElement);
    addBtn.style.zIndex = 0;

    let arr = Array.from(cardSection.childNodes).filter(
      (el) => el.dataset.value === e.target.previousElementSibling.textContent
    );
    for (let i = 0; i < arr.length; i++) {
      cardSection.removeChild(arr[i]);
    }

    //Deleting project on the main section

    if (mainSection.childNodes.length !== 0) {
      if (mainHeading.textContent === projectName.textContent) {
        mainHeading.textContent = "";
        e.target.parentElement.classList.remove("active");
      }
    }
  });
}
/* ************************************************************************************ */

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
  if (projectListAll) {
    projectListAll.forEach((el) => {
      el.style.zIndex = 0;
    });
  }
  if (taskPriorityAll) {
    taskPriorityAll.forEach((el) => {
      el.style.zIndex = 0;
    });
  }
  if (taskDeleteAll) {
    taskDeleteAll.forEach((el) => {
      el.style.zIndex = 0;
    });
  }
  if (taskStatusBtnAll) {
    taskStatusBtnAll.forEach((el) => {
      el.style.zIndex = 0;
    });
  }
  btns.forEach((el) => {
    el.style.zIndex = 0;
  });
}

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
  if (projectListAll) {
    projectListAll.forEach((el) => {
      el.style.zIndex = 2;
    });
  }
  if (taskPriorityAll) {
    taskPriorityAll.forEach((el) => {
      el.style.zIndex = 2;
    });
  }
  if (taskDeleteAll) {
    taskDeleteAll.forEach((el) => {
      el.style.zIndex = 2;
    });
  }
  if (taskStatusBtnAll) {
    taskStatusBtnAll.forEach((el) => {
      el.style.zIndex = 2;
    });
  }

  btns.forEach((el) => {
    el.style.zIndex = 2;
  });
}
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
  if (projectListAll) {
    projectListAll.forEach((el) => {
      el.style.zIndex = 2;
    });
  }
  if (taskPriorityAll) {
    taskPriorityAll.forEach((el) => {
      el.style.zIndex = 2;
    });
  }
  if (taskDeleteAll) {
    taskDeleteAll.forEach((el) => {
      el.style.zIndex = 2;
    });
  }
  if (taskStatusBtnAll) {
    taskStatusBtnAll.forEach((el) => {
      el.style.zIndex = 2;
    });
  }
  btns.forEach((el) => {
    el.style.zIndex = 2;
  });
}

function creatingTodos() {
  const mainHeading = gettingButtons().mainHeading;
  const cardSection = gettingButtons().cardSection;
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card");
  todoCard.id = "todoCard";
  let task = new Todo(
    mainHeading.textContent,
    title.value,
    description.value,
    date.value,
    priority.value
  );

  projectHolder.forEach((el) => {
    if (el.project === task.project) {
      el.arr.push(task);
    }
  });

  console.log(projectHolder);
  localStorage.setItem("projects", JSON.stringify(projectHolder));
  cardSection.appendChild(todoCard);

  const taskTitleHeading = document.createElement("span");
  taskTitleHeading.classList.add("task-title-heading");
  taskTitleHeading.textContent = "Title";
  const taskTitle = document.createElement("p");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = task.title;
  const descriptionHeading = document.createElement("span");
  descriptionHeading.classList.add("description-heading");
  descriptionHeading.textContent = "Description";
  const taskDescription = document.createElement("p");
  taskDescription.classList.add("task-description");
  taskDescription.textContent = task.description;
  const dateHeading = document.createElement("span");
  dateHeading.classList.add("date-heading");
  dateHeading.textContent = "Due Date";
  const taskDate = document.createElement("p");
  taskDate.classList.add("task-date");
  taskDate.textContent = task.date;
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

  if (task.priority === "Important") {
    taskIconContainer.childNodes[0].style.stroke = "gold";
  }

  taskIconContainer.childNodes[0].addEventListener("click", function () {
    if (taskIconContainer.childNodes[0].style.stroke === "gold") {
      taskIconContainer.childNodes[0].style.stroke = "white";
    } else if (taskIconContainer.childNodes[0].style.stroke !== "gold") {
      taskIconContainer.childNodes[0].style.stroke = "gold";
    }
  });

  taskIconContainer.childNodes[1].nextElementSibling.addEventListener(
    "click",
    function () {
      cardSection.removeChild(taskIconContainer.parentElement.parentElement);
    }
  );

  taskEventHandlers.childNodes[0].addEventListener("click", function () {
    if (taskEventHandlers.childNodes[0].style.backgroundColor !== "green") {
      taskEventHandlers.childNodes[0].textContent = "Task Completed";
      taskEventHandlers.childNodes[0].style.backgroundColor = "green";
    } else if (
      taskEventHandlers.childNodes[0].style.backgroundColor !== "red"
    ) {
      taskEventHandlers.childNodes[0].textContent = "Mark Complete";
      taskEventHandlers.childNodes[0].style.backgroundColor = "red";
    }
  });
}

function allTaskFunctionality() {
  const mainHeading = gettingButtons().mainHeading;
  const todoCards = gettingButtons().todoCard;
  if (mainHeading.textContent !== "") {
    mainHeading.textContent = "";
    todoCards.forEach((el) => (el.style.display = "flex"));
  }
}

/*  getting localStorage */
function test() {
  let data = localStorage.getItem("projects");

  if (data) {
    const projectInput = gettingButtons().projectInput;
    const mainSection = gettingButtons().section;
    const addBtn = gettingButtons().addBtn;
    const mainHeading = gettingButtons().mainHeading;
    const cardSection = gettingButtons().cardSection;
    const projectContainer = gettingButtons().projectContainer;
    data = JSON.parse(data);
    console.log(data);

    data.forEach((el) => {
      projectHolder.push(el);
      console.log(el);
      const projectList = document.createElement("div");
      projectList.classList.add("project-list");
      projectList.style.zIndex = 2;
      const projectName = document.createElement("p");
      const projectIcon = document.createElement("a");
      projectName.classList.add("project-name");
      projectName.textContent = el.project;
      projectIcon.innerHTML = `&Cross;`;
      projectIcon.classList.add("delete-project");
      projectList.append(projectName, projectIcon);
      projectContainer.append(projectList);
    });
  }
}

/****************************************************************** */

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
  test,
};
