const router = require("express").Router();
const Course = require("../models/Booking")


router.post("/", async (req, res) => {
    try {
        newCourse = new Course({
            course: req.body.course,
            duration: req.body.duration,
            room: req.body.room,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            age: req.body.age,
            reason: req.body.reason,
            message: req.body.message
        });
        const course = await newCourse.save();
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
