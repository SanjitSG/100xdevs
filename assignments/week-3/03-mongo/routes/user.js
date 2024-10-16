const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.headers;
    await User.create({
        username,
        password
    })
    res.json({ message: "User Created Successfully" })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({ response })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const { courseId } = req.params
    const { username } = req.headers
    // find if course exists

    await User.updateOne({
        username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    })

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({ courses })
});

module.exports = router