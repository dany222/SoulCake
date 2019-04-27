const ui = new UI();
const menuButtons = document.querySelectorAll("nav li");

//Event Handlers
menuButtons.forEach(button =>
  button.addEventListener("click", renderActivePage)
);
