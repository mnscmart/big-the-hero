const express = require('express');

const Ongcontroller = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController');
const ProfilerController = require('./controllers/ProfilerController');
const SessionController = require('./controllers/SessionController');



const routes = express.Router();

routes.post('./session', SessionController.create);

routes.get('/ongs',Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.get('./profiler', ProfileControler.index);

routes.get('./incidents', IncidentsController.index);
routes.post('./incidents', IncidentsController.create);
routes.delete('./incidents', IncidentsController.delete);
       
module.exports = routes;