class UI {
  constructor() {
    this.display = document.querySelector("main");
  }

  renderPage(parent, pageName, src) {
    this.turnNavLinkToActive(parent, pageName);
    this.renderBackgroundFor(pageName, src);
  }

  turnNavLinkToActive(parent, pageName) {
    parent.forEach(link => {
      if (link.className === pageName) {
        link.classList.add("active");
      } else if (link.classList.contains("active")) {
        link.classList.remove("active");
      }
    });
  }

  renderBackgroundFor(pageName, articles) {
    switch (pageName) {
      case "nav-news":
        this.renderNews(articles);
        break;
      case "nav-gallery":
        this.renderGallery();
        break;
      case "nav-discography":
        this.renderDiscography();
        break;
      case "nav-td":
        this.renderTourDates();
        break;
      case "nav-store":
        this.renderStore();
        break;
      case "nav-connect":
        this.renderConnect();
        break;
    }
  }

  renderNews(articles) {
    this.display.innerHTML = "";
    articles.forEach(article => {
      const container = document.createElement("div");
      const html = `<h1>${article.headline}</h1>
      <img src='src/Pictures/${article.picture}'>
      <p>${article.content}</p>`;
      container.className = "container";
      container.innerHTML = html;
      this.display.appendChild(container);
    });
  }

  renderGallery()
}
