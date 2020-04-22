const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;

/* 
Entidades:
*ONG
*Caso(Incident)

Funcinalidade:
*Login de ONG
*Logout de ONG
*Cadastro de ONG
*Cadastrar novos casos
*Deletar casos
*Listar casos específicos de uma ONG
*Listar todos os casos
*Entrar em contato com a ONG
*/