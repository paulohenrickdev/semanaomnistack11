const connection = require('../database/connection');

module.exports = {

  async index(request, response){
    const { page = 1 } = request.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)//Limitando a busca para 5 registros
      .offset((page -1) * 5)
      .select([
        'incidents.*', 
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.uf'
      ]);//Retorna todos os incidentes e respectivos dados das ongs

    response.header('X-Total-Count', count['count(*)']);
    
    return response.json(incidents)
  },

  async create(request, response) {//Cadastra um incidente
    const {title, description, value} = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id })
  },

  async delete(request, response){//Deleta um incidente
    const { id } = request.params;//recebendo os parametros
    const ong_id = request.headers.authorization;//pegando o parametro ID para saber qual sera deletado

    const incident = await connection('incidents')
      .where('id', id)//verificando se o ID existe
      .select('ong_id')
      .first();

      if(incident.ong_id != ong_id){//Se o ong_id que está logado, for diferente doque está no banco, irá retornar um erro
        return response.status(401).json({error: 'Operation not permitted.'});
      }

      await connection('incidents').where('id', id).delete();

      return response.status(204).send();
  }

};