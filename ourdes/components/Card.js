export class Card extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'author', 'price', 'sale-price', 'image-src'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title') {
            this.shadowRoot.querySelector('.book-title').textContent = newValue;
        } else if (name === 'author') {
            this.shadowRoot.querySelector('.author-title').textContent = newValue;
        } else if (name === 'price') {
            this.shadowRoot.querySelector('.actual-price').textContent = `${newValue}$`;
        } else if (name === 'sale-price') {
            this.shadowRoot.querySelector('.sales-price').textContent = `${newValue}$`;
        } else if (name === 'image-src') {
            this.shadowRoot.querySelector('.product-image img').src = newValue;
        }
    }

    connectedCallback() {
        // const font = document.createElement("link");
        // font.href = "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
        // font.rel = "stylesheet";
        // document.head.appendChild(font);

        // const icon = document.createElement("link");
        // icon.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
        // icon.rel = "stylesheet";
        // document.head.appendChild(icon);


        
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        
        <link rel="stylesheet" href="./components/BookCard.css">

        <article class="product-card">
            <span class="rank-tag">1</span>
            <div class="i-tag">
                <span class="weight-tag"><i class="fas fa-feather"></i></span>
                <span class="page-count"><i>451</i></span>
            </div>
            <div class="product-image">
                <img src="${this.getAttribute('image-src')}" alt="book-cover">
            </div>
            <div class="product-info">
                <div class="author-info">
                    <div class="author-img">
                        <img src="./pics/haruki_murakami.jpg" alt="">
                    </div>
                    <div class="title">
                        <a href="#" class="book-title">${this.getAttribute('title')}</a>
                        <a href="#" class="author-title">${this.getAttribute('author')}</a>
                    </div>
                </div>
                <div class="price">
                    <div class="actual-price">${this.getAttribute('price')}₮</div>
                    <div class="sales-price">${this.getAttribute('sale-price')}₮</div>
                </div>
            </div>
            <div class="button">
                <button class="cart"><i class="fas fa-cart-shopping"></i></button>
                <!-- <button class="about"><i class="fas fa-regular fa-circle-info"></i></button> -->
            </div>
        </article>
        `;
    }
}