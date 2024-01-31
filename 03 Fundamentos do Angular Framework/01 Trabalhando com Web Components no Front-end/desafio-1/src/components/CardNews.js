class CardNews extends HTMLElement {
     constructor() {
          super();
          const SHADOW = this.attachShadow({ mode: 'open' });
          SHADOW.appendChild(this.build());
          SHADOW.appendChild(this.styles());
     }

     build() {
          const componentRoot = document.createElement("div");
          componentRoot.setAttribute("class", "card");

          const cardLeft = document.createElement("div");
          cardLeft.setAttribute("class", "card__left");

          const autor = document.createElement("span");
          autor.setAttribute("class", "card__author");
          autor.textContent = `By ${this.getAttribute("autor") || `Anonymous`}`; // Se passar um parâmetro || se não passar um parâmetro

          const linkTitle = document.createElement("a");
          linkTitle.setAttribute("class", "card__title");
          linkTitle.textContent = this.getAttribute("title") || 'undefined';
          linkTitle.href = this.getAttribute("url") || "#";

          const newsContent = document.createElement("p");
          newsContent.setAttribute("class", "card__description")
          newsContent.textContent = this.getAttribute("content") || "";

          cardLeft.appendChild(autor);
          cardLeft.appendChild(linkTitle);
          cardLeft.appendChild(newsContent);

          const cardRight = document.createElement("div");
          cardRight.setAttribute("class", "card__right");

          const newsImage = document.createElement("img");
          newsImage.src = this.getAttribute("imgsrc") || "./assets/foto-default.jpg"

          cardRight.appendChild(newsImage);

          componentRoot.appendChild(cardLeft);
          componentRoot.appendChild(cardRight);

          return componentRoot;
     }

     styles() {
          const style = document.createElement("style");
          style.textContent = `
          * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          }
     
          .container {
          display: flex;
          justify-content: center;
          align-items: center;
          }
     
          .card {
          width: 80%;
          border: 1px solid #808080;
          box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.7);
          -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.7);
          -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          }
     
          .card__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
          }
     
          .card__author {
          font-weight: 500;
          }
     
          .card__title {
          margin-top: 15px;
          font-size: 25px;
          color: #000;
          text-decoration: none;
          font-weight: 600;
          }
     
          .card__title:hover {
          text-decoration: underline;
          cursor: pointer;
          }
     
          .card__description {
          color: rgb(70, 70, 70);
          }
     
          .card__right {
          display: flex;
          align-items: center;
          }
          `;
          return style;
     }
}

customElements.define("card-news", CardNews);