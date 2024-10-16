const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { adminSchema, courseSchema } = require("../validation/inputValidator");
const { Admin, Course } = require("../db");
const router = Router();
const { JWT_SECRET } = require('../config')
const jwt = require('jsonwebtoken')

// Admin Routes
router.post("/signup", async (req, res) => {
    const { username, password } = req.header;

    //zod - validation
    const validationResult = adminSchema.safeParse({ username, password });
    if (!validationResult.success) {
        res.status(400).json({ error: validationResult.error.errors });
    }

    try {
        const response = await Admin.create({
            username: username,
            password: password,
        });
        if (response) {
            res.json({ message: "Admin Created Successfully" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server error!" });
    }
});

router.post("/signin", async (req, res) => {
    const { username, password } = req.headers

    try {

        const response = await Admin.find({ username, password })
        console.log(response);

        if (response) {
            const token = jwt.sign({ username }, JWT_SECRET);
            res.json({ token: `Bearer ${token}` })
        }
    } catch (error) {
        console.log(error);
        res.send("Internal server error")

    }


});

router.post("/courses", adminMiddleware, async (req, res) => {
    const { title, description, imageLink, price } = req.body;
    const inputValidation = courseSchema.safeParse({ title, description, imageLink, price })
    if (!inputValidation) {
        res.send({ message: "Invalid input" })
    }

    try {
        const newCourse = await Course.create({
            title,
            description,
            imageLink,
            price
        })
        res.send({ message: "course create successfully", courseId: newCourse._id })
    } catch (error) {
        res.send("internal server error while creating a new course", error)
    }
});

router.get("/courses", adminMiddleware, async (req, res) => {
    try {
        const courseList = await Course.find({})
        res.json({ courseList })

    } catch (error) {
        res.send("Internal server error")
    }
});

module.exports = router;
