function applyShadowDOM() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        #top {
          display: flex;
          height: 8rem;
          width: 100%;
          flex-direction: row;
          align-items: center;
        }
  
        #nav_buttons {
          display: flex;
          margin-left: auto;
          margin-right: 0;
          align-items: center;
        }
  
        #nav_buttons a {
          margin: 0.5rem;
        }
  
        .links a img {
          width: 4rem;
        }
      </style>
  
      <div id="top">
        <img src="../assets/Logo.jpg" />
  
        <div id="nav_buttons">
          <a href="./index.html">Home</a>
          |
          <a href="./contato.html">Contato</a>
          |
          <a href="./sobre.html">Sobre</a>
        </div>
      </div>
    `;

    const shadowRoot = document.createElement('div').attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
    document.body.insertBefore(shadowRoot, document.querySelector('h2'));
}

applyShadowDOM()
