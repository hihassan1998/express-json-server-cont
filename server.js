const express = require("express");
const path = require("path");

const app = express();
// Define port
const PORT =  process.env.PORT || 5000;
// Load json file with data
const data = require(path.join(__dirname, "data", "items.json"));


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Express server is up and  running!')
})

app.get('/all', (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})