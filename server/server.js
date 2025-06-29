const express =require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const usersRoute = require("./routes/usersRoute");
const moviesRoute = require("./routes/moviesRoute")
const theatresRoute = require("./routes/theatresRoute");
const paymentsRoute = require("./routes/paymentsRoute");

app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/theatres", theatresRoute);
app.use("/api/payments", paymentsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node JS server is running on the port ${port}`));