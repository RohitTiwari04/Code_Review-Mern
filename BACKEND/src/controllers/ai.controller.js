const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);


    res.send(response);

}

// exports.getResponse = async (req, res) => {
//   try {
//     const { code } = req.body;   // <-- req.body must exist here
//     console.log("Received code:", code);

//     // Call AI service (mock for now)
//     const response = { review: "This is a mock review for your code." };

//     res.json(response);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
