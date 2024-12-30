const openAIController = require("../controllers/open_ai_controller")

module.exports = app => {
    var router = require("express").Router()

    router.post("/generateText", openAIController.generateText)

    app.use("/api", router)
};