
module.exports = {
  restApi: (app) => {
    app.get('/status', (req, res) =>  {
      res.status(200).send({"status": "service running!"})
    });
  }
}