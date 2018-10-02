//Update the name of the controller below and rename the file.
const cards = require("../controllers/cards")
module.exports = function(app){

  app.get('/', cards.index);
  app.get('/cards/new/:id',cards.new);
  app.get('/cards/remove/:id',cards.remove);
  app.post('/cards', cards.create);
}
