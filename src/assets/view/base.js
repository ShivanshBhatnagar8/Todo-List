/** In this module we are adding the following functionality
 * -Creating a foundational base structure of the page
 * -Elements like main header aside and section are created as a child to body element
 *
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
    for (let i = 0; i < 5; i++) {
      const btn = document.createElement("a");
      btn.classList.add(`btn-${i}`);
      btn.href = "#";
      const btnName = document.createElement("p");
      switch (i) {
        case 0:
          btn.innerHTML = `<?xml version="1.0" ?><svg viewBox="0 0 22 30" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 2" id="Layer_2"><g id="Interface-Light"><g id="work-business-light-task-list-2"><line class="cls-1" x1="4.5" x2="16.5" y1="19.5" y2="19.5"/><line class="cls-1" x1="4.5" x2="16.5" y1="23.5" y2="23.5"/><line class="cls-1" x1="4.5" x2="8.5" y1="15.5" y2="15.5"/><path class="cls-1" d="M15.5,2.5h3.9a2.09,2.09,0,0,1,2.1,2.08V27.42a2.09,2.09,0,0,1-2.1,2.08H2.6A2.09,2.09,0,0,1,.5,27.42V4.58A2.09,2.09,0,0,1,2.6,2.5H6.5"/><rect class="cls-1" height="4" rx="1" width="9" x="6.5" y="0.5"/></g></g></g></svg> `;
          btn.appendChild(btnName);
          btnName.textContent = "All Tasks";
          break;
        case 1:
          btn.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="calendar_1_"><path d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z" fill="#333332"/><rect fill="#333332" height="3" width="4" x="7" y="12"/><rect fill="#333332" height="3" width="4" x="7" y="17"/><rect fill="#333332" height="3" width="4" x="7" y="22"/><rect fill="#333332" height="3" width="4" x="14" y="22"/><rect fill="#333332" height="3" width="4" x="14" y="17"/><rect fill="#333332" height="3" width="4" x="14" y="12"/><rect fill="#333332" height="3" width="4" x="21" y="22"/><rect fill="#333332" height="3" width="4" x="21" y="17"/><rect fill="#333332" height="3" width="4" x="21" y="12"/></g></svg>`;
          btn.appendChild(btnName);
          btnName.textContent = "Today";
          break;
        case 2:
          btn.innerHTML = `<?xml version="1.0" ?><svg height="20" version="1.1" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g id="layer1"><path d="M 3 0 L 3 3 L 4 3 L 4 0 L 3 0 z M 16 0 L 16 3 L 17 3 L 17 0 L 16 0 z M 0 1 L 0 20 L 20 20 L 20 1 L 18 1 L 18 2 L 19 2 L 19 5 L 1 5 L 1 2 L 2 2 L 2 1 L 0 1 z M 5 1 L 5 2 L 15 2 L 15 1 L 5 1 z M 1 6 L 19 6 L 19 19 L 1 19 L 1 6 z M 8 9 L 8 10 L 11 10 L 11 16 L 12 16 L 12 9 L 8 9 z "/></g></svg>`;
          btn.appendChild(btnName);
          btnName.textContent = "Due This Week";
          break;
        case 3:
          btn.innerHTML = `<?xml version="1.0" ?><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2C8.34315 2 7 3.34315 7 5C7 7.22661 7.78878 10.2037 8.22483 11.6854C8.45862 12.4798 9.19005 13 10.0013 13C10.8107 13 11.5413 12.482 11.7759 11.6891C12.2124 10.2137 13 7.25038 13 5C13 3.34315 11.6569 2 10 2Z" fill="#212121"/><path d="M10 14C8.89543 14 8 14.8954 8 16C8 17.1046 8.89543 18 10 18C11.1046 18 12 17.1046 12 16C12 14.8954 11.1046 14 10 14Z" fill="#212121"/></svg>`;
          btn.appendChild(btnName);
          btnName.textContent = "Important";
          break;
        case 4:
          btn.innerHTML = `<?xml version="1.0" ?><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.0303 11.0303C17.3232 10.7374 17.3232 10.2626 17.0303 9.96967C16.7374 9.67678 16.2626 9.67678 15.9697 9.96967L11 14.9393L9.03033 12.9697C8.73744 12.6768 8.26256 12.6768 7.96967 12.9697C7.67678 13.2626 7.67678 13.7374 7.96967 14.0303L10.4697 16.5303C10.7626 16.8232 11.2374 16.8232 11.5303 16.5303L17.0303 11.0303ZM15.994 4.08449C15.9093 2.91913 14.937 2 13.75 2H10.25C9.09205 2 8.13841 2.87472 8.01379 3.99944L6.25 4C5.00736 4 4 5.00736 4 6.25V19.75C4 20.9926 5.00736 22 6.25 22H17.75C18.9926 22 20 20.9926 20 19.75V6.25C20 5.00736 18.9926 4 17.75 4L15.9862 3.99944C15.9893 4.02764 15.9919 4.05599 15.994 4.08449ZM15.9948 4.09595L16 4.25C16 4.19822 15.9983 4.14685 15.9948 4.09595ZM10.25 6.5H13.75C14.53 6.5 15.2174 6.10307 15.621 5.50016L17.75 5.5C18.1642 5.5 18.5 5.83579 18.5 6.25V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V6.25C5.5 5.83579 5.83579 5.5 6.25 5.5L8.37902 5.5002C8.78267 6.1031 9.46997 6.5 10.25 6.5ZM10.25 3.5H13.75C14.1642 3.5 14.5 3.83579 14.5 4.25C14.5 4.66421 14.1642 5 13.75 5H10.25C9.83579 5 9.5 4.66421 9.5 4.25C9.5 3.83579 9.83579 3.5 10.25 3.5Z" fill="#212121"/></svg>`;
          btn.appendChild(btnName);
          btnName.textContent = "Completed";
          break;
        default:
          break;
      }
      btnGrp.append(btn);
    }
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
