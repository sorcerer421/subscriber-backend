
module.exports = {
  restApi: (app) => {
    //middleware function 
    app.use((req, res, next) => {
      // do something
      console.log('middleware function')
      next();
    });

    // example route api/mobile/v1/analytics
    app.get('/status', (req, res) =>  {
      res.status(200).send({"status": "service running!"})
    }); 
  }
}