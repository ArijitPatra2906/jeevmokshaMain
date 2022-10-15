const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookingRoute = require("./routes/booking");
const contactRoute = require("./routes/contact");

dotenv.config();
app.use(express.json());
app.use(cors());
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: true,
    })
    .then(console.log("connected to mongodb!!!"))
    .catch((err) => console.log(err));




app.use("/booking", bookingRoute);
app.use("/contact", contactRoute);


app.get("/", function (req, res) {
    res.status(200).send("server running")
})

app.listen(process.env.PORT || 9000, () => {
    console.log("running backend");
});
