class DinamicTitle extends HTMLElement {
     constructor() {
          super();

          const SHADOW = this.attachShadow({ mode: "open" });

          //  Base do componente -> <h1>Hello World!</h1>
          const COMPONENT_ROOT = document.createElement('h1');
          COMPONENT_ROOT.textContent = this.getAttribute("title");

          // Estilizar o componente
          const STYLE = document.createElement('style');
          STYLE.textContent =
               `
                    h1 {
                         color: #ff0000;
                         text-align: center;
                    }
               `;


          // Enviar para a Shadow
          SHADOW.appendChild(COMPONENT_ROOT);
          SHADOW.appendChild(STYLE);
     }
}

customElements.define('dinamic-title', DinamicTitle)