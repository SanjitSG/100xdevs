require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json());
app.use("/user", userRoutes)






app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);

})





