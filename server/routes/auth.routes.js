const { register, login, logout } = require("../controllers/auth.controller.js")
const ratelimit = require("express-rate-limit")

const router = require("express").Router()

const limiter = ratelimit({
Window: 1000 * 6,
max: 6
})


router
    .post("/signup", register)
    .post("/signin", login)
    .post("/signout", logout)

module.exports = router 