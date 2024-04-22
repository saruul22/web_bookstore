class Book {
    constructor(producObj) {
        this.title = producObj.title;
        this.authorName = producObj.authorName;
        this.authorImg = producObj.authorImg;
        // this.desc = producObj.description;
        this.img = producObj.image;
        this.price = producObj.salePrice;
    }
    Render() {
        console.log(this.img);
        return `
        <article>
                    <img src="${this.img}" alt="book-image" class="book-detail-photo">
                    <div class="details">
                        <a href="#"><img src="${this.authorImg}" alt="author-profile-image" class="author-photo"></a>
                        <div class="meta">
                            <h3>${this.title}</h3>
                            <p class="author-name">${this.authorName}</p>
                            <p class="price">${this.price}</p>
                        </div>
                    </div>
                    <div class="detail-btns">
                        <button class="choose-btn" aria-label="put in the basket">Сагсанд хийх
                            <img src="./Wireframe/grocery-store.png" alt="sagsnii zurag"></button>
                        <button class="more-btn" aria-label="see more">Дэлгэрэнгүй<img src="./Wireframe/arrow.jpg"
                                alt="delgerensui sumnii zurag"></button>
                    </div>
                </article>`
    }
}