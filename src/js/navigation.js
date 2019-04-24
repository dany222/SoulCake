const navBtns = document.querySelectorAll("nav li");
const displayArea = document.querySelector("main");

navBtns.forEach(btn => {
  btn.addEventListener("click", () => renderPage(btn.className));
});

function renderPage(pageName) {
  switch (pageName) {
    case "nav-news":
      console.log("hello");
      renderNewsBlock();
      break;
    case "nav-gallery":
      renderGalleryBlock();
      break;
    case "nav-discography":
      renderDiscographyBlock();
      break;
    case "nav-td":
      renderTourDatesBlock();
      break;
    case "nav-store":
      renderStoreBlock();
      break;
    case "nav-connect":
      renderConnectBlock();
      break;
  }
}

function renderNewsBlock() {
  displayArea.innerHTML = "";
  if (localStorage.getItem("articles") === null) {
    displayArea.appendChild(createButtonForAddingNewArticle());
  } else {
    const articles = JSON.parse(localStorage.getItem("articles"));
    articles.forEach(article =>
      displayArea.appendChild(
        generateArticle(article.headline, article.imageUrl, article.content)
      )
    );
    displayArea.appendChild(createButtonForAddingNewArticle());
  }
}
function renderGalleryBlock() {}
function renderDiscographyBlock() {}
function renderTourDatesBlock() {}
function renderStoreBlock() {}
function renderConnectBlock() {}

function generateArticle(headline, image, content) {
  const container = document.createElement("article");
  container.innerHTML = `
  <h1>${headline}</h1>
  <img src = 'src/Pictures/${image}'></img>
  <p>${content}</p>`;
  return container;
}

function createFormForNewArticle() {
  const form = document.createElement("form");

  form.innerHTML = `
  <h1> Create your own article </h1>
  <input type='text' id = 'input-headline' placeholder='Article Header...'>
  <input type='text' id='input-image-url' placeholder='Image Url...'>
  <input type='textbox' id='input-content' placeholder='Article Content....'>
  <input type='submit' value = 'Submit' onclick = saveArticle()>
  `;

  displayArea.appendChild(form);
}

function saveArticle() {
  const newArticle = {
    headline: document.querySelector("#input-headline").value,
    imageUrl: document.querySelector("#input-image-url").value,
    content: document.querySelector("#input-content").value
  };
  let articles;

  if (localStorage.getItem("articles") === null) {
    articles = [];
  } else {
    articles = JSON.parse(localStorage.getItem("articles"));
  }
  articles.push(newArticle);

  localStorage.setItem("articles", JSON.stringify(articles));
  renderNewsBlock();
}

function createButtonForAddingNewArticle() {
  const buttonForAddingNewArticle = document.createElement("button");
  buttonForAddingNewArticle.textContent = "Add new Article";
  buttonForAddingNewArticle.addEventListener("click", createFormForNewArticle);

  return buttonForAddingNewArticle;
}
