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
const imagesAndVideos = [[2, 1, 4, 5, 3, 12, 3], ["asd", 1, "asdqwe", 4]];

const albums = [
  {
    name: "asd",
    picture: "no",
    soundFile: "asdq3123124"
  },
  {
    name: "asd",
    picture: "no",
    soundFile: "asdq3123124"
  }
];
//Event Handlers
menuButtons.forEach(button =>
  button.addEventListener("click", () =>
    ui.renderPage(menuButtons, button.className, albums)
  )
);
