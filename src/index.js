import "./css/style.css";
import "./css/query.css";
import { creatingBase } from "./assets/view/base";
import {
  gettingProjects,
  hideProjectForm,
  creatingProject,
  popUpFunctionality,
  submitForm,
  popupCloseFunctionality,
  showingAllTasks,
  getLocalStorage,
} from "./assets/controller/eventListeners";

creatingBase.pageLoad();
gettingProjects();
hideProjectForm();
creatingProject();
popUpFunctionality();
popupCloseFunctionality();
submitForm();
showingAllTasks();
getLocalStorage();
