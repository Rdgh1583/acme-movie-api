const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <html>
  <body>867</body>
</html>
`);
});

module.exports = app;
