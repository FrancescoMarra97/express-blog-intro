const express = require("express");
const app = express();
const port = 3000;
const host = "http://127.0.0.1";


const posts = [
    {
        titolo :  "titolo_1",
        contenuto : "contenuto_1",
        immagine : "placeholder-image1.jpg",
        tags: ["tag_1", "tag_2"]
    },
    {
        titolo :  "titolo_2",
        contenuto : "contenuto_2",
        immagine : "placeholder-image2.jpg",
        tags: ["tag_3", "tag_4"]
    },
    {
        titolo :  "titolo_3",
        contenuto : "contenuto_3",
        immagine : "placeholder-image3.jpg",
        tags: ["tag_5", "tag_6"]
    },
    {
        titolo :  "titolo_4",
        contenuto : "contenuto_4",
        immagine : "placeholder-image4.jpg",
        tags: ["tag_7", "tag_8"]
    },
    {
        titolo :  "titolo_5",
        contenuto : "contenuto_5",
        immagine : "placeholder-image5.jpg",
        tags: ["tag_9", "tag_10"]
    },
];


app.get("/", (req, res) => {
    res.send("<h1>Benvenuto nel mio blog!</h1>")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port} e ${host}`);
});

app.get("/posts", (req, res) =>{
    res.json(posts)
})

const postsController = require("./controllers/posts.js");
app.get("/posts", postsController.index);