import { gettingButtons } from "../model/elements";
import { getProject } from "../model/class";
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

let importantTask = [];
let completedTask = [];
let weekTask = [];
let todayTask = [];
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
function creatingProjectList() {
  const projects = gettingButtons().projects;
  const projectInput = gettingButtons().projectInput;
  const mainSection = gettingButtons().section;
  const addBtn = gettingButtons().addBtn;
  const projectContainer = gettingButtons().projectContainer;
  const mainHeading = gettingButtons().mainHeading;
  const projectList = document.createElement("div");
  projectList.classList.add("project-list");
  projectList.style.zIndex = 2;
  const projectName = document.createElement("p");
  const projectIcon = document.createElement("a");
  projectName.classList.add("project-name");
  projectName.textContent = getProject(projectInput.value).getProjectName; //From a class
  projectIcon.innerHTML = `&Cross;`;
  projectIcon.classList.add("delete-project");
  projectList.append(projectName, projectIcon);
  projectContainer.append(projectList);

  /**************************************** */

  //Appending project on main section

  const projectListAll = gettingButtons().projectListAll;
  if (projectListAll.length === 1) {
    projectList.addEventListener("click", function (e) {
      addBtn.style.zIndex = 2;

      e.target.classList.add("active");

      if (e.target.classList.contains("active")) {
        mainHeading.textContent = projectName.textContent;
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
      });
    });
    addBtn.style.zIndex = 2;
  }
  /************************************************** */
  //This is to delete the particular project

  projectIcon.addEventListener("click", function (e) {
    projectInput.value = "";
    e.stopPropagation();
    projectContainer.removeChild(e.target.parentElement);
    addBtn.style.zIndex = 0;

    //Deleting project on the main section
    if (mainSection.childNodes.length !== 0) {
      if (mainHeading.textContent === projectName.textContent) {
        mainHeading.textContent = "";
        e.target.parentElement.classList.remove("active");
      }
    }
  });
}

function addTodo() {
  const btns = gettingButtons().btnGrp;
  const popupVisible = gettingButtons().popup;
  const popupContentVisible = gettingButtons().popupContent;
  const projectContainerAll = gettingButtons().projectContainerAll;
  popupVisible.classList.remove("hidden");
  popupContentVisible.classList.remove("hidden", "scale");
  if (projectContainerAll) {
    projectContainerAll.forEach((el) => {
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
  const projectContainerAll = gettingButtons().projectContainerAll;
  popupVisible.classList.add("hidden");
  popupContentVisible.classList.add("hidden", "scale");
  if (projectContainerAll) {
    projectContainerAll.forEach((el) => {
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
  const projectContainerAll = gettingButtons().projectContainerAll;
  popupVisible.classList.add("hidden");
  popupContentVisible.classList.add("hidden", "scale");
  if (projectContainerAll) {
    projectContainerAll.forEach((el) => {
      el.style.zIndex = 2;
    });
  }
  btns.forEach((el) => {
    el.style.zIndex = 2;
  });
}

function creatingTodos() {
  const mainHeading = gettingButtons().mainHeading;
  const projectName = gettingButtons().projectTitle;
  const mainSection = gettingButtons().section;
  const projectContainer = gettingButtons().projectContainer;
  const cardSection = gettingButtons().cardSection;
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card");
}

export {
  submitButtonFunctionality,
  creatingProjectList,
  hideProjectFunctionality,
  gettingProjectsFunctionality,
  submitTodoForm,
  addTodo,
  hidingTodoForm,
  creatingTodos,
};
