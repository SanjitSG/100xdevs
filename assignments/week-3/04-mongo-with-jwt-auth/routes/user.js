const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { userSchema } = require("../validation/inputValidator");
const { JWT_SECRET } = require("../config");
const jwt = require('jsonwebtoken')
// User Routes
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.headers;
        const inputValidator = userSchema.safeParse({ username, password });
        if (!inputValidator.success) {
            return res.status(400).json({ message: "Invalid input" });
        }
        await User.create({ username, password });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error", error })
    }
});

router.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.headers;
        const response = await User.find({ username, password })
        if (response) {
            const token = jwt.sign({ username }, JWT_SECRET)
            res.status(200).json({ token: `Barer ${token}` })
        } else {
            res.json({ message: "Token not generated" })
        }

    } catch (error) {
        console.log(error);
        res.send("Internal server error")
    }
});

router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const courseList = await Course.find({});
    res.status(200).json({ courseList })
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        const { courseId } = req.params
        const { username } = req.headers
        await User.updateOne({
            username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        })

        res.json({ message: "Course purchased" })

    } catch (error) {
        res.json({ message: "error while purchasing course" })
    }

});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
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

module.exports = router;
