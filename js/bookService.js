document.querySelectorAll('#angilal li').forEach(li => {
    li.addEventListener('click', function (event) {
        console.log("click");
        event.preventDefault();
        const type = this.getAttribute('data-type');
        const currentUrl = window.location.href;
        const separator = currentUrl.includes('?') ? '&' : '?';
        const newUrl = `${currentUrl}${separator}type=${encodeURIComponent(type)}`;
        window.location.href = newUrl;

    });
});

const usp = new URLSearchParams(document.location.search);
const filterCategory = usp.get("type") ?? "";

// const filterCategory = usp.get("cat");
let rawData;
fetch("https://api.jsonbin.io/v3/b/6625fed1ad19ca34f85e0aa9")
    .then(result => {
        const temp = result.json();
        console.log(temp);
        return temp;
    })
    .then(books => {
        console.log(books);
        rawData = books.record;
        if (filterCategory != "")
            filteredData = rawData.filter(data => data.type == filterCategory)

        const productsHTMLArray = filteredData.map(bookObj => {
            console.log(bookObj);
            const book = new Book(bookObj);
            return book.Render();
        });
        const booksHTML = productsHTMLArray.reduce((prev, current) => prev + current, "");
        const bookList = document.getElementById("book-list");
        bookList.innerHTML = booksHTML;
    });
