import { gettingButtons } from "../model/elements";

function gettingProjectsFunctionality() {
  const addProject = gettingButtons().addProjectButton;
  const projectForm = gettingButtons().projectForm;
  const projects = gettingButtons().projects;
  addProject.href = `#${projects.id}`;
  projectForm.style.display = "flex";
  projectForm.style.height = "auto";
  projectForm.classList.remove("hidden");
  projectForm.classList.add("slide-down");
}

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

export {
  submitButtonFunctionality,
  creatingProjectList,
  hideProjectFunctionality,
  gettingProjectsFunctionality,
};
