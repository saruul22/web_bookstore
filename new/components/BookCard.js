export class BookCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
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
                <img src="./pics/1.jpg" alt="">
            </div>
            <div class="product-info">
                <div class="author-info">
                    <div class="author-img">
                        <img src="./pics/haruki_murakami.jpg" alt="">
                    </div>
                    <div class="title">
                        <a href="#" class="book-title">book title</a>
                        <a href="#" class="author-title">author title</a>
                    </div>
                </div>
                <div class="price">
                    <div class="actual-price">20$</div>
                    <div class="sales-price">10$</div>
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