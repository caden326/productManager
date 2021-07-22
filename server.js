const express = require("express");
const app = express();
const port = 8000
const cors = require ("cors")


require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use (cors());




const AllMyProductRoutes = require("./server/routes/product.routes");
AllMyProductRoutes(app);



app.listen(port, () => console.log(`yo server is runnin on port ${port}`));