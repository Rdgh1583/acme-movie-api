const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <html>
  <body>The Acme api</body>
</html>
`);
});

module.exports = app;
