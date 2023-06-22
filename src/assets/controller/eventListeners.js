import { addTask, tasks } from "../model/class";
import { gettingButtons } from "../model/elements";
import {
  creatingProjectList,
  submitButtonFunctionality,
  hideProjectFunctionality,
  gettingProjectsFunctionality,
} from "./eventFunction";

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

export { gettingProjects, hideProjectForm, creatingProject };
