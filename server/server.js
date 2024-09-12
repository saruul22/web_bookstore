const express = require('express');
const app = express();
const PORT = 3000;

const books = {
    1: {
        title: "1Q84",
        author: "Haruki Murakami",
        price: "19'999",
        salePrice: "14'999",
        imgSrc: "./pics/1.jpg",
        authImg: "./pics/haruki_murakami.jpg",
        rank: "2",
        pageCount: "928",
        weight: "0.8kg"
    },
};

app.get('/api/books/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books[bookId];

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});