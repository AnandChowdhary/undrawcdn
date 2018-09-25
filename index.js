const express = require("express");
const cors = require("cors");
const RateLimit = require("express-rate-limit");
const slugify = require("slugify");

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
	const icons = require("./icons.json");
	const illustrations = [];
	for (icon in icons) illustrations.push(slugify(icon, { lower: true }) + ".svg");
	res.json({ illustrations });
});
app.get("/:illustration", (req, res) => {
	const fs = require("fs");
	const illustration = req.params.illustration;
	const filePath = __dirname + `/illustrations/${illustration}`;
	if (fs.existsSync(filePath)) {
		res.sendFile(filePath);
	} else {
		res.status(404).json({ error: "404" });
	}
});

app.set("json spaces", 4);
app.listen(process.env.PORT || 3000, () => console.log("UndrawCDN running!"));
