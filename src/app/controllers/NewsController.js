class NewsController {
    // [GET] /
    index(req, res) {
        res.render("search");
    }
    // [GET] /search
    abc(req, res) {
        res.send("abc");
    }
}

module.exports = new NewsController;
