const navBtns = document.querySelectorAll("nav li");
const displayArea = document.querySelector("main");

navBtns.forEach(btn => {
  btn.addEventListener("click", () => renderPage(btn.className));
});

function renderPage(pageName) {
  switch (pageName) {
    case "nav-news":
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

function renderNewsBlock() {}
function renderGalleryBlock() {}
function renderDiscographyBlock() {}
function renderTourDatesBlock() {}
function renderStoreBlock() {}
function renderConnectBlock() {}
