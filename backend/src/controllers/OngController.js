const connection = require('../database/connection');
const crypto = require('crypto');
 
module.exports = {
  async index (request, response){
    const ongs = await connection('ongs').select('*');
     
    return response.json(ongs);
  },

  async create(request, response){
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');//Ira gerar 4 bytes de caracteres Hexadecimais

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })//Com o await ele vai esperar esse código finalizar, para então ele continuar

  return response.json({id});
  }
}