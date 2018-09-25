// node -e 'require("./download")()'

const https = require("https");
const fs = require("fs");
const slugify = require("slugify");
const icons = require("./icons.json");

module.exports = () => {
	for (icon in icons) {
		const slug = slugify(icon, { lower: true });
		const url = icons[icon];
		const file = fs.createWriteStream(`${slug}.svg`);
		https.get(url, response => response.pipe(file));
	}
};
