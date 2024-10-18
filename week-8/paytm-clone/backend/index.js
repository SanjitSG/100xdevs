require('dotenv').config();

const express = require("express");
const mainRouter = require('./routes/index')
const cors = require('cors')
const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json());
//routing
app.use("/api/v1", mainRouter)






app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);

})





