import { addTask, tasks } from "../model/class";
import { gettingButtons } from "../model/elements";

// function submitForm() {
//   const btns = gettingButtons().btnGrp;
//   const popupVisible = gettingButtons().popup;
//   const popupContentVisible = gettingButtons().popupContent;
//   const submit = gettingButtons().submitBtn;
//   submit.addEventListener("click", function (e) {
//     e.preventDefault();
//     addTask();
//     popupVisible.classList.add("hidden");
//     popupContentVisible.classList.add("hidden", "scale");
//     btns.forEach((el) => {
//       el.style.zIndex = 2;
//     });
//   });
// }

// function popUpFunctionality() {
//   const btns = gettingButtons().btnGrp;
//   const popupVisible = gettingButtons().popup;
//   const popupContentVisible = gettingButtons().popupContent;
//   const add = gettingButtons().addBtn;
//   add.addEventListener("click", function () {
//     popupVisible.classList.remove("hidden");
//     popupContentVisible.classList.remove("hidden", "scale");
//     btns.forEach((el) => {
//       el.style.zIndex = 0;
//     });
//   });
// }

// function popupCloseFunctionality() {
//   const btns = gettingButtons().btnGrp;
//   const popupVisible = gettingButtons().popup;
//   const popupContentVisible = gettingButtons().popupContent;
//   const cancel = gettingButtons().cancelBtn;
//   cancel.addEventListener("click", function () {
//     popupVisible.classList.add("hidden");
//     popupContentVisible.classList.add("hidden", "scale");
//     btns.forEach((el) => {
//       el.style.zIndex = 2;
//     });
//   });
// }
// export { popUpFunctionality, submitForm, popupCloseFunctionality };

function gettingProjects() {
  const addProject = gettingButtons().addProjectButton;
  const projectForm = gettingButtons().projectForm;
  const projects = gettingButtons().projects;
  addProject.addEventListener("click", function () {
    addProject.href = `#${projects.id}`;
    projectForm.style.display = "flex";
    projectForm.style.height = "auto";
    projectForm.classList.remove("hidden");
    projectForm.classList.add("slide-down");
  });
}

function hideProjectForm() {
  const projectForm = gettingButtons().projectForm;
  const projects = gettingButtons().projects;
  const cancelProject = gettingButtons().cancelProject;
  cancelProject.addEventListener("click", function () {
    cancelProject.href = `#${projects.id}`;
    projectForm.style.display = "none";
    projectForm.style.height = 0;
    projectForm.classList.add("hidden");
    projectForm.classList.remove("slide-down");
  });
}

function creatingProject() {
  const projects = gettingButtons().projects;
  const projectForm = gettingButtons().projectForm;
  const submitProject = gettingButtons().submitProject;
  submitProject.addEventListener("click", function () {
    submitProject.href = `#${projects.id}`;
    projectForm.style.display = "none";
    projectForm.style.height = 0;
    projectForm.classList.add("hidden");
    projectForm.classList.remove("slide-down");
    creatingProjectList();
  });
}

function creatingProjectList() {
  const projects = gettingButtons().projects;
  const projectInput = gettingButtons().projectInput;
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  const projectName = document.createElement("p");
  const projectIcon = document.createElement("a");
  projectName.textContent = projectInput.value;
  projectIcon.innerHTML = `&Cross;`;
  projectIcon.classList.add("delete-project");
  projectContainer.append(projectName, projectIcon);
  projects.append(projectContainer);
  projectIcon.addEventListener("click", function (e) {
    projects.removeChild(e.target.parentElement);
  });
}
export { gettingProjects, hideProjectForm, creatingProject };
