const express = require("express");
const path = require("path");

const app = express();
// Define port
const PORT =  process.env.PORT || 5000;
// Load json file with data
const data = require(path.join(__dirname, "data", "items.json"));


app.use(express.json());

// Route to test if data is displayed in json format.
app.get('/test', (req, res) => {
  res.json({ status: "ok", message: "Server is up and running!" });
});

// Routes defining route
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

app.get('/all', (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})