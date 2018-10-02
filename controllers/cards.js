const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    if(!req.session.deck){
      req.session.deck =[];
    }
    knex('cards').then((results)=>{
      res.render("index",{cards:results, decks:req.session.deck});
    })
  },
  create: function(req,res){
    knex('cards')
      .insert(req.body)
      .then((results) => {
        res.redirect('/')
    })
  },
  new: function(req,res){
    knex('cards')
      .where('id',req.params.id)
      .then((results)=>{
        req.session.deck.push(results[0])
        res.redirect('/')
      })
  },
  remove: function(req,res){
    let decks = req.session.deck
    for(var i = 0; i < decks.length; i++){
      if(decks[i].id == req.params.id){
        decks.splice(i,1);
        res.redirect('/');
        return;
      }
    }
    res.redirect('/');
  }
}
