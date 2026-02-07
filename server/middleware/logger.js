const logger = (req, res, next) => {
    console.log("request receive")
    next()
}

module.exports = logger