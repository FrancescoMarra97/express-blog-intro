const express = require("express");
const app = express();
const port = 3000;
const host = "http://127.0.0.1";


app.use(express.static('public'));
const posts = [
    {
        titolo :  "titolo_1",
        contenuto : "contenuto_1",
        immagine : "img/img1.png",
        tags: ["tag_1", "tag_2"]
    },
    {
        titolo :  "titolo_2",
        contenuto : "contenuto_2",
        immagine : "./img/img2.png",
        tags: ["tag_3", "tag_4"]
    },
    {
        titolo :  "titolo_3",
        contenuto : "contenuto_3",
        immagine : "/img/img3.png",
        tags: ["tag_5", "tag_6"]
    },
    {
        titolo :  "titolo_4",
        contenuto : "contenuto_4",
        immagine : "./img/img4.png",
        tags: ["tag_7", "tag_8"]
    },
    {
        titolo :  "titolo_5",
        contenuto : "contenuto_5",
        immagine : "./img/img5.png",
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