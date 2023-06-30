/** In this module we are adding the following functionality
 * -Creating a foundational base structure of the page
 
 */

const creatingBase = (() => {
  const body = document.querySelector("body");
  const main = document.createElement("main");
  const header = document.createElement("header");
  const aside = document.createElement("aside");
  const section = document.createElement("section");
  section.classList.add("main-section");
  function creatingBaseElements() {
    body.append(main);
    main.append(header, aside, section);
  }
  const creatingHeaderElements = () => {
    const heading = document.createElement("h1");
    const addBtn = document.createElement("a");
    addBtn.classList.add("add-btn");
    header.append(heading, addBtn);
    heading.textContent = "To-Do-List";
    addBtn.href = "#";
    addBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class='add' id="add"><path fill="#212121" d="M7.91012437,3.00805567 L8,3 C8.24545989,3 8.44960837,3.17687516 8.49194433,3.41012437 L8.5,3.5 L8.5,7.5 L12.5,7.5 C12.7454599,7.5 12.9496084,7.67687516 12.9919443,7.91012437 L13,8 C13,8.24545989 12.8231248,8.44960837 12.5898756,8.49194433 L12.5,8.5 L8.5,8.5 L8.5,12.5 C8.5,12.7454599 8.32312484,12.9496084 8.08987563,12.9919443 L8,13 C7.75454011,13 7.55039163,12.8231248 7.50805567,12.5898756 L7.5,12.5 L7.5,8.5 L3.5,8.5 C3.25454011,8.5 3.05039163,8.32312484 3.00805567,8.08987563 L3,8 C3,7.75454011 3.17687516,7.55039163 3.41012437,7.50805567 L3.5,7.5 L7.5,7.5 L7.5,3.5 C7.5,3.25454011 7.67687516,3.05039163 7.91012437,3.00805567 L8,3 L7.91012437,3.00805567 Z"></path></svg>`;
    return { heading, addBtn };
  };
  function addingButtons() {
    const btnGrp = document.createElement("div");
    btnGrp.classList.add("button-list");
    aside.appendChild(btnGrp);

    const btn = document.createElement("a");
    btn.classList.add(`btn-0`);
    btn.href = "#";
    const btnName = document.createElement("p");
    btn.innerHTML = `<?xml version="1.0" ?><svg viewBox="0 0 22 30" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 2" id="Layer_2"><g id="Interface-Light"><g id="work-business-light-task-list-2"><line class="cls-1" x1="4.5" x2="16.5" y1="19.5" y2="19.5"/><line class="cls-1" x1="4.5" x2="16.5" y1="23.5" y2="23.5"/><line class="cls-1" x1="4.5" x2="8.5" y1="15.5" y2="15.5"/><path class="cls-1" d="M15.5,2.5h3.9a2.09,2.09,0,0,1,2.1,2.08V27.42a2.09,2.09,0,0,1-2.1,2.08H2.6A2.09,2.09,0,0,1,.5,27.42V4.58A2.09,2.09,0,0,1,2.6,2.5H6.5"/><rect class="cls-1" height="4" rx="1" width="9" x="6.5" y="0.5"/></g></g></g></svg> `;
    btn.appendChild(btnName);
    btnName.textContent = "All Tasks";
    btnGrp.append(btn);
  }
  function addingProjects() {
    const projectBox = document.createElement("div");
    projectBox.classList.add("projects");
    projectBox.id = "projects-id";
    aside.appendChild(projectBox);
    const h2 = document.createElement("h2");
    h2.textContent = "Projects";
    projectBox.appendChild(h2);
    const line = document.createElement("hr");
    const addProjectButton = document.createElement("a");
    const btnId = document.createElement("p");
    addProjectButton.classList.add("add-project");
    addProjectButton.href = "#";
    addProjectButton.innerHTML = `<?xml version="1.0" ?><svg  width="5" height="5" viewBox="0 0 16 16"><path fill="#212121" d="M7.91012437,3.00805567 L8,3 C8.24545989,3 8.44960837,3.17687516 8.49194433,3.41012437 L8.5,3.5 L8.5,7.5 L12.5,7.5 C12.7454599,7.5 12.9496084,7.67687516 12.9919443,7.91012437 L13,8 C13,8.24545989 12.8231248,8.44960837 12.5898756,8.49194433 L12.5,8.5 L8.5,8.5 L8.5,12.5 C8.5,12.7454599 8.32312484,12.9496084 8.08987563,12.9919443 L8,13 C7.75454011,13 7.55039163,12.8231248 7.50805567,12.5898756 L7.5,12.5 L7.5,8.5 L3.5,8.5 C3.25454011,8.5 3.05039163,8.32312484 3.00805567,8.08987563 L3,8 C3,7.75454011 3.17687516,7.55039163 3.41012437,7.50805567 L3.5,7.5 L7.5,7.5 L7.5,3.5 C7.5,3.25454011 7.67687516,3.05039163 7.91012437,3.00805567 L8,3 L7.91012437,3.00805567 Z"></path></svg>`;
    btnId.textContent = "Add Project";
    addProjectButton.appendChild(btnId);
    const projectForm = document.createElement("form");
    projectForm.id = "project-form";
    projectForm.classList.add("project-form", "hidden");
    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.id = "project-input";
    const projectBtns = document.createElement("div");
    projectBtns.classList.add("project-btns");
    const addingProject = document.createElement("a");
    addingProject.href = "#";
    addingProject.textContent = "Submit";
    addingProject.id = "project-submit";
    const cancelProject = document.createElement("a");
    cancelProject.href = "#";
    cancelProject.textContent = "Cancel";
    cancelProject.classList.add("cancel-project");
    projectBtns.append(addingProject, cancelProject);
    projectForm.append(projectInput, projectBtns);
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    projectBox.append(line, addProjectButton, projectForm, projectContainer);
  }
  function creatingPopUpForm() {
    const popup = document.createElement("div");
    popup.classList.add("popup", "hidden");
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content", "hidden", "scale");
    popup.appendChild(popupContent);
    const form = document.createElement("form");
    form.id = "todo-form";
    popupContent.appendChild(form);
    const cancelBtn = document.createElement("a");
    cancelBtn.href = "#";
    cancelBtn.innerHTML = "&Cross;";
    cancelBtn.classList.add("cancel-btn");
    const titleLabel = document.createElement("label");
    titleLabel.for = "title";
    titleLabel.textContent = "Title";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "todoName";
    titleInput.placeholder = "Title";
    titleInput.required = true;
    const descriptionLabel = document.createElement("label");
    descriptionLabel.for = "title";
    descriptionLabel.textContent = "Description";
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    descriptionInput.name = "todo-description";
    descriptionInput.placeholder = "Description";
    descriptionInput.required = true;
    const dateLabel = document.createElement("label");
    dateLabel.for = "date";
    dateLabel.textContent = "Due Date";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "todo-date";
    dateInput.placeholder = "Date";
    dateInput.required = true;
    const optionLabel = document.createElement("label");
    optionLabel.for = "priority";
    optionLabel.textContent = "Priority";
    const selection = document.createElement("select");
    selection.name = "Priority";
    selection.id = "priority";
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.value = "Normal";
    option1.textContent = "Normal";
    option2.value = "Important";
    option2.textContent = "Important";
    selection.append(option1, option2);
    const formBtnInput = document.createElement("input");
    formBtnInput.type = "submit";
    formBtnInput.value = "Add Task";
    formBtnInput.id = "submit";
    form.append(
      cancelBtn,
      titleLabel,
      titleInput,
      descriptionLabel,
      descriptionInput,
      dateLabel,
      dateInput,
      optionLabel,
      selection,
      formBtnInput
    );

    body.appendChild(popup);
  }

  function creatingMainSection() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");
    section.appendChild(mainContainer);
    const h3 = document.createElement("h3");
    const cardSection = document.createElement("div");
    cardSection.classList.add("card-section");
    mainContainer.append(h3, cardSection);
  }

  function pageLoad() {
    creatingBaseElements();
    creatingHeaderElements();
    creatingPopUpForm();
    addingButtons();
    addingProjects();
    creatingMainSection();
    /* getting local storage */
  }
  return {
    body,
    header,
    main,
    aside,
    section,
    pageLoad,
    creatingBaseElements,
    creatingHeaderElements,
    creatingPopUpForm,
    addingButtons,
    addingProjects,
  };
})();

export { creatingBase };
