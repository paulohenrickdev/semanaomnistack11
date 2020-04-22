const express = require('express');
const OngController = require('./src/controllers/OngController');
const IncidentController = require('./src/controllers/IncidentController');
const ProfileController = require('./src/controllers/ProfileController');
const SessionController = require('./src/controllers/SessionController');
const connection = require('./src/database/connection');

const routes = express.Router();//Facilitando a vida utilizando o express

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; //Exportando as routras pro meu index.js (onde será utilizado)


/* 
Metodos HTTP:

GET: Buscar/Listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

