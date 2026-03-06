const express = require("express");
const app = express();

// Middleware to parse URL-encoded data from the form
app.use(express.urlencoded({ extended: true }));

// Serve the survey form at the root URL
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/EX6.html");
});

// Handle the form submission
app.post("/submit", function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const rating = req.body.rating;
    const feedback = req.body.feedback;

    // Send a response displaying the captured data
    res.send(`
        <h2>Survey Submitted Successfully</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Rating:</b> ${rating}</p>
        <p><b>Feedback:</b> ${feedback}</p>
        <br>
        <a href="/">Back to Survey</a>
    `);
});

// Start the server on port 3000
app.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});
