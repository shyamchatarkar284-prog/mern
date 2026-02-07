const express = require("express")
require("dotenv").config({ path: "./.env" })
const mongoose = require("mongoose")
const cors = require("cors")
const cookieparser = require("cookie-parser")
const protect = require("./middleware/protect.js")
const rateLimit = require("express-rate-limit")
mongoose.connect(process.env.MONGO_URL)

const app = express()

// const Limiter = rateLimit({
//     window: 1000 * 60,
//     max: 5
// })
// app.use(Limiter)
const cors = require('cors');
app.use(cors({
origin: process.env.NODE_ENV === 'production' 
? 'https://your-client-project-name.vercel.app'
: 'http://localhost:3000',
credentials: true
}));

// app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.use(express.json()) // for req .body
app.use(cookieparser()) // for req.cookies 

app.use("/api/todo", protect, require("./routes/todo.routes.js"))
app.use("/api/auth", require("./routes/auth.routes.js"))

mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, console.log("server running..."))
})

// middleware
// vercel hosting

