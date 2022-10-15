const router = require("express").Router();

const Blog = require("../models/BlogModel");


// Get post
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get all posts
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json(blogs)

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
