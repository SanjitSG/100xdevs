const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.headers;

    await Admin.create({
        username,
        password
    })

    res.json({ "message": "Admin create successfully" })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, imageLink, price } = req.body
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({ message: "Course created succyssfully", courseId: newCourse._id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({ response })
});

module.exports = router;