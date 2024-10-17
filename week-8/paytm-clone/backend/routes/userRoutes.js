const { Router } = require("express");
const { User } = require("../db/db");
const { userSchema } = require("../input-validator/validator");
const router = Router();

//sign up
router.post("/signup", async (req, res) => {
  const { firstName, lastName, password } = req.body;
  //zod validation
  const inputValidation = userSchema.safeParse({
    firstName,
    lastName,
    password,
  });
  if (!inputValidation.success) {
    return res.status(400).json({ message: "Provide valid inputs" });
  }

  //creating user
  await User.create({ firstName, lastName, password });
  res.status(201).json({ message: "User created!" });
});

//singin
router.post("/signin", async (req, res) => {
  const { firstName, password } = req.headers
  try {

    const response = await User.find({ firstName, password })
    if (response) {
      res.status(200).json({ message: "Sign in success" })
    } else {
      res.status(400).json({ message: "Error" })
    }
  } catch (error) {
    return res.status(400).json({ error })
  }

})
//update info
module.exports = router;
