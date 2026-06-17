const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dns = require("dns");
const { URL } = require("url");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let urls = [];
let counter = 1;

app.get("/", (req, res) => {
  res.send("URL Shortener Microservice");
});

app.post("/api/shorturl", (req, res) => {
  const original_url = req.body.url;

  let hostname;

  try {
    hostname = new URL(original_url).hostname;
  } catch (err) {
    return res.json({ error: "invalid url" });
  }

  dns.lookup(hostname, (err) => {
    if (err) {
      return res.json({ error: "invalid url" });
    }

    const short_url = counter++;

    urls.push({
      original_url,
      short_url,
    });

    res.json({
      original_url,
      short_url,
    });
  });
});

app.get("/api/shorturl/:short_url", (req, res) => {
  const short_url = parseInt(req.params.short_url);

  const urlData = urls.find(
    (item) => item.short_url === short_url
  );

  if (!urlData) {
    return res.json({
      error: "No short URL found",
    });
  }

  res.redirect(urlData.original_url);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});