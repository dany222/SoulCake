const ui = new UI();
const menuButtons = document.querySelectorAll("nav li");
const articles = [
  {
    headline: "First Article",
    picture: "Balaton-móló.png",
    content: "asdasdasdasdasdasdasdasdqweqwdrasfasdfaw"
  },
  {
    headline: "Second Article",
    picture: "Balaton-part.png",
    content: "asdqweinqibncvodjoaisdpiqwepkq;lfnzl;c;ak"
  }
];
//Event Handlers
menuButtons.forEach(button =>
  button.addEventListener("click", () =>
    ui.renderPage(menuButtons, button.className, articles)
  )
);
