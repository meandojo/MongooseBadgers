Badger = require('./models');

module.exports = {
    allBadger:function(req,res){
        console.log('stuff is happening');
        Badger.find({})
            .then(data=>console.log(data)||res.render('index',{allBadgers:data}))
            .catch(errs=>console.log(errs)||res.render('index'))
    },
    newBadger:function(req,res){
        res.render('new');
    },
    createBadger:function(req,res){
        Badger.create(req.body)
            .then(data=>console.log(data)||res.redirect('/'))
            .catch(errs=>console.log(errs)||res.redirect('/badger'))
    },
    showBadger:function(req,res){
        Badger.findById(req.params.badger_id)
            .then(data=>console.log(data)||res.render('edit',{badger:data}))
            .catch(errs=>console.log(errs)||res.redirect('/badger/'+req.params.badger_id))
    },
    updateBadger:function(req,res){
        Badger.findByIdAndUpdate(req.params.badger_id, req.body)
            .then(data=>console.log(data)||res.redirect('/'))
            .catch(errs=>console.log(errs)||res.redirect('/badger/'+req.params.badger_id))
    },
    destroyBadger:function(req,res){
        Badger.findByIdAndDelete(req.params.badger_id)
            .then(data=>console.log(data)||res.redirect('/'))
            .catch(errs=>console.log(errs)||res.redirect('/'))
    }
}