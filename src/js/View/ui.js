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

  renderBackgroundFor(pageName, source) {
    switch (pageName) {
      case "nav-news":
        this.renderNews(source);
        break;
      case "nav-gallery":
        this.renderGallery(source);
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

  renderGallery(imagesAndVideos) {
    const imagesBtn = document.createElement("button");
    const videosBtn = document.createElement("button");
    imagesBtn.addEventListener("click", () =>
      this.renderImages(imagesAndVideos)
    );
    videosBtn.addEventListener("click", () =>
      this.renderVideos(imagesAndVideos)
    );
    imagesBtn.textContent = "Images";
    videosBtn.textContent = "Videos";
    this.display.innerHTML = "";
    this.display.appendChild(imagesBtn);
    this.display.appendChild(videosBtn);
  }

  renderImages(source) {
    this.display.innerHTML = "";
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back To Gallery";
    backBtn.addEventListener("click", () => this.renderGallery(source));
    this.display.appendChild(backBtn);
    source[0].forEach(image => {
      const img = document.createElement("img");
      img.src = `src/Pictures/${image}`;
      this.display.appendChild(img);
    });
  }
  renderVideos(source) {
    this.display.innerHTML = "";
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back To Gallery";
    backBtn.addEventListener("click", () => this.renderGallery(source));
    this.display.appendChild(backBtn);
    source[1].forEach(video => {
      const vid = document.createElement("video");
      const source = document.createElement("source");
      source.src = `src/Videos/${video}`;
      vid.controls = true;
      this.display.appendChild(vid);
    });
  }
}
