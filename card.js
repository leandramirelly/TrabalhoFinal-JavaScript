class Card extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const div=document.createElement("div");
        div.className="card";
        const id =this.getAttribute("id");
        div.innerHTML= `
            <img src="${this.getAttribute("img")}" class="card-img-top" alt="${this.getAttribute("title")}">
            <div class="card-body">
                <h5 class="card-title">${this.getAttribute("title")}</h5>
                <h7 class="card-text">${this.getAttribute("description")}</h7>
                <h6 class="card-text">${this.getAttribute("value")}</h6>
                <a href="detalhe.html?id=${id} role="button"><button type = "button" class = "btn m-2 text-dark btn btn-outline-warning" data-filter = "natal">Ver Mais</button></a>
            </div>
        `;
        this.appendChild(div);
    }
}

customElements.define("card-item", Card);