const express = require("express");
const app = express();
const port = 3000;
const host = "http://127.0.0.1";

const posts = [
    {
        titolo :  "titolo",
        contenuto : "contenuto",
        immagine : "placeholder-image1.jpg",
        tags: ["tag_1", "tag_2"]
    },
]


app.get("/", (req, res) => {
    res.send("<h1>Benvenuto nel mio blog!</h1>")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/posts", (req, res) =>{
    res.json("")
})