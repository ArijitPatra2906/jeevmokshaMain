const router = require("express").Router();
const Contact = require("../models/Contact")


router.post("/", async (req, res) => {
    try {
        newContactDetails = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            subject: req.body.subject,
            message: req.body.message
        });
        const course = await newContactDetails.save();
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;