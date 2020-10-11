const express = require('express');
const app = express();
const { restApi } = require("./src/api/api");
//services routes
restApi(app);
const port = 4000;
console.log('starting node process....');
app.listen(port, () => {
  console.log(`express running on port ${port}`)
});