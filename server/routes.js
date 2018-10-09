const bp = require('body-parser');
const controller = require('./controller');
module.exports = function(app){
    app.use(bp.urlencoded({extended:true}));
    app.set('views', __dirname + "/views");
    app.set('view engine', 'ejs');
    app.get('/', controller.allBadger)
    app.get('/badger', controller.newBadger)
    app.get('/badger/:badger_id', controller.showBadger)
    app.post('/badger',controller.createBadger)
    app.post('/badger/:badger_id',controller.updateBadger)
    app.get('/badger/destroy/:badger_id', controller.destroyBadger)


    return app;
}