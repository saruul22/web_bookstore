const template = document.createElement('template');
template.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    font-family: Poppins, sans-serif;
    transition: all .3s ease;
}

body{
    background-color: var(--main-body);
}

.product-card{
    --rank-tag: #DA5A5A;
    --i-tag: #D9D9D9;
    --main-body: #F0F0DA;
    --card: #FAFAF5;
    --color-btn-default: #D6CE9B;
    
    width: 300px;
    height: 570px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    background-color: var(--card);
}

.rank-tag, 
.i-tag{
    position: absolute;
}

.rank-tag{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    left: 10px;
    top: 10px;
    /* background-color: var(--rank-tag); */
    background-color: rgba(218, 90, 90, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bolder;
}

.i-tag{
    display: flex;
    flex-direction: column;
    right: 10px;
    top: 10px;
    gap: 10px;
}

.weight-tag,
.page-count{
    width: 40px;
    height: 40px;
    background-color: rgba(217, 217, 217, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}

.product-image{
    width: 300px;
    height: 450px;
    /* position: relative; */
}

.product-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

.product-info{
    box-sizing: border-box;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    overflow: hidden;
}

.author-info{
    display: flex;
    gap: 5px;
}

.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

a{
    text-decoration: none;
    color: black;
}

.author-img{
    width: 50px;
    height: 50px;
    position: relative;
}

.author-img img{
    width: 100%;
    border-radius: 50px;
}

.button{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* padding: 10px; */
    margin-bottom: 15px;
}

.button button{
    --color-btn-default:red;
    background-color: var(--color-btn-default);
    border: none;
    width: 140px;
    height: 30px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bolder;
}

.button button:hover{
    background-color: var(--card);
}
</style>

<article class="product-card">
    <span class="rank-tag">1</span>
    <div class="i-tag">
        <span class="weight-tag"><i class="fas fa-feather"></i></span>
        <span class="page-count"><i>451</i></span>
    </div>
    <div class="product-image">
        <img src="./bestseller_books/1.jpg" alt="">
    </div>
    <div class="product-info">
        <div class="author-info">
            <div class="author-img">
                <img src="./authors/haruki_murakami.jpg" alt="">
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
        <button class="cart">сагслах<i class="fas fa-cart-shopping"></i></button>
        <button class="about">дэлгэрэнгүй<i class="fa-solid fa-arrow-right"></i></button>
    </div>
</article>
`;

class bookCard extends HTMLElement{
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: "closed"});
        shadowRoot.append(template.content.cloneNode(true));

        this.getAttribute("price")
        // const style = document.createElement('link');
        // style.setAttribute('rel', 'stylesheet');
        // style.setAttribute('href', './bookCard.css');
        // shadowRoot.appendChild(style);
    }
}

customElements.define('book-card', bookCard);