const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());

const serviceAccount = require('../database/firebaseKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-bookstore-2f805.firebaseio.com"
});

const db = admin.firestore();
const booksCollection = db.collection('books');

app.get('/api/books/:id', async (req, res) => {
    try {
        const bookRef = booksCollection.doc(req.params.id);
        const bookDoc = await bookRef.get();

        if(bookDoc.exists) {
            res.json(bookDoc.data());
        } else {
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});