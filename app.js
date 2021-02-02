const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <html>
  <body>54321</body>
</html>
`);
});

module.exports = app;
