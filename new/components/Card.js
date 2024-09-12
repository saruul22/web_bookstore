export class Card extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'author', 'price', 'sale-price', 'img-src', 'auth-img', 'rank', 'page-count', 'weight'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // if (name === 'title') {
        //     this.shadowRoot.querySelector('.book-title').textContent = newValue;
        // } else if (name === 'author') {
        //     this.shadowRoot.querySelector('.author-title').textContent = newValue;
        // } else if (name === 'price') {
        //     this.shadowRoot.querySelector('.actual-price').textContent = `${newValue}₮`;
        // } else if (name === 'sale-price') {
        //     this.shadowRoot.querySelector('.sales-price').textContent = `${newValue}₮`;
        // } else if (name === 'img-src') {
        //     this.shadowRoot.querySelector('.product-image img').src = newValue;
        // }

        const mappings = {
            'title': '.book-title',
            'author': '.author-title',
            'price': '.actual-price',
            'sale-price': '.sales-price',
            'img-src': '.product-image img',
            'auth-img': '.author-img img',
            'rank': '.rank-tag',
            'page-count': '.page-count i',
            'weight': '.weight-tag i'
        };

        const element = this.shadowRoot.querySelector(mappings[name]);
        if(element){
            if(name === 'img-src' || name === 'auth-img'){
                element.src = newValue || '/home/saruul/web_bookstore/new/pics/default.jpg';
            } else if(name === 'sale-price'){
                if(newValue){
                    element.textContent = `${newValue}₮`;
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            } else {
                element.textContent = (name === 'price') ? `${newValue}₮` : newValue;
            }
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
            <span class="rank-tag">${this.getAttribute('rank')}</span>
            <div class="i-tag">
                <span class="weight-tag"><i class="${this.getAttribute('weight')}"></i></span>
                <span class="page-count"><i>${this.getAttribute('page-count') || 'N/A'}</i></span>
            </div>
            <div class="product-image">
                <img src="${this.getAttribute('img-src')}" alt="book-cover">
            </div>
            <div class="product-info">
                <div class="author-info">
                    <div class="author-img">
                        <img src="${this.getAttribute('auth-img')}" alt="">
                    </div>
                    <div class="title">
                        <a href="#" class="book-title">${this.getAttribute('title')}</a>
                        <a href="#" class="author-title">${this.getAttribute('author')}</a>
                    </div>
                </div>
                <div class="price">
                    <div class="actual-price">${this.getAttribute('price')}₮</div>
                    <div class="sales-price">${this.getAttribute('sale-price')}</div>
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