const express = require("express");
const app = express();
const port = 3000;
const host = "http://127.0.0.1";


app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("<h1>Benvenuto nel mio blog!</h1>")
})


const postsController = require("./controllers/posts.js");
app.get("/posts", postsController.index);

app.listen(port, () => {
    console.log(`Example app listening on port ${port} e ${host}`);
});

