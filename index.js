const express = require("express");
const cors = require("cors");
const ga = require("node-ga");
const RateLimit = require("express-rate-limit");
const slugify = require("slugify");

const app = express();
app.use(express.json());
app.use(cors());
app.use(ga("UA-79176349-9", {
	cookie_name: "undrawcdn"
}));
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
		res.set("Cache-Control", "public, max-age=31557600");
		res.sendFile(filePath);
	} else {
		res.status(404).json({ error: "404" });
	}
});

app.get("/:color/:illustration", (req, res) => {
	const fs = require("fs");
	const illustration = req.params.illustration;
	const filePath = __dirname + `/illustrations/${illustration}`;
	if (fs.existsSync(filePath)) {
		res.set("Cache-Control", "public, max-age=31557600");
		res.type("image/svg+xml");
		res.send(
			fs
				.readFileSync(filePath, "utf-8")
				.toString()
				.replace(/\#6c63ff/g, "#" + req.params.color)
		);
	} else {
		res.status(404).json({ error: "404" });
	}
});

app.set("json spaces", 4);
app.listen(process.env.PORT || 3001, () => console.log("UndrawCDN running!"));
