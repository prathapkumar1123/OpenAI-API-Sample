const OpenAI = require('openai');

const BaseResponse = require("../models/base_response")


exports.generateText = async (req, res) => {
    try {
        const { prompt } = req.body
        
        const openai = new OpenAI({
          apiKey: process.env.OPEN_AI_KEY,
        })

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "developer", content: "You are a helpful assistant assists user to help with interviews." },
                { role: "user", content: prompt },
            ],
        })
        
        let data = completion.choices[0].message

        return res.status(200).send(new BaseResponse(200, "success", data))
    } catch (err) {
        res.status(err.status).send(new BaseResponse(err.status, err.message))
    }

};