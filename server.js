const express = require("express")

const app = express()

app.get("/", (req, res) => {
    return res.json({
        status: "Success",
        message: "Hello World"
    })
})

const port = 3000; // Choose a port number

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});