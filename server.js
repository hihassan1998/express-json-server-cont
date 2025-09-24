const express = require("express");
const path = require("path");
const app = express();
// Define port
const PORT = process.env.PORT || 5000;
// Load json file with data
const data = require(path.join(__dirname, "data", "items.json"));

app.use(express.json());

// Route to test if data is displayed in json format.
app.get('/test', (req, res) => {
    res.json({ status: "ok", message: "Server is up and running!" });
});

// Defining routes info on root route
app.get('/', (req, res) => {
    res.json({
        info: "Express server is up and running!",
        routes: {
            "/all": "Return all JSON items",
            "/names": "Return only the names of the items",
            "/color/:color": "Return items filtered by color"
        }
    });
});

// Return all data from data/items.json
app.get('/all', (req, res) => {
    res.json(data)
})

// Return only names
app.get("/names", (req, res) => {
    const dataItems = data.items;
    let names = [];
    for (let i = 0; i < dataItems.length; i++) {
        names.push(dataItems[i].name);
    }
    res.json(names);
});

// Return data filtered by color
app.get('/color/:color', (req, res) => {
    const colorParam = req.params.color.toLowerCase();
    const dataItems = data.items;

    // Only handle array of colors
    const filteredItems = dataItems.filter(item =>
        item.color.some(c => c.toLowerCase() === colorParam)
    );

    res.json(filteredItems);
});




// Start the server
app.listen(PORT, () => {
    console.log(`Express-JSON app listening on PORT ${PORT}`)
})