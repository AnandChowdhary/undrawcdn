const express = require("express");
const cors = require("cors");
const RateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());
app.use(cors());
app.enable("trust proxy");

const limiter = new RateLimit({
	windowMs: 60 * 1000,
	max: 30,
	delayMs: 0
});
app.use(limiter);

app.get("/", (req, res) => {
	res.json({ endpoints: "anand" });
});

app.set("json spaces", 4);
app.listen(process.env.PORT || 3000, () => console.log("UndrawCDN running!"));
