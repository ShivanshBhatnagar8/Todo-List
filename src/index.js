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
} from "./assets/controller/eventListeners";
// import { gettingButtons } from "./assets/model/elements";
import { storingLocalStorage, test } from "./assets/controller/eventFunction";

creatingBase.pageLoad();
gettingProjects();
hideProjectForm();
creatingProject();
popUpFunctionality();
popupCloseFunctionality();
submitForm();
showingAllTasks();

test();
