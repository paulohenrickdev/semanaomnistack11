//npx knex migrate:make create_incidents Este é o camando via CMD para criar uma migration

exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
    table.increments();//O id sera dado pela aplicação
    table.string('title').notNullable();//Criando a coluna nome e dizendo que não pode ser nulo
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();//Relacionamento, para armazenar a ong que criou esse incidente

    table.foreign('ong_id').references('id').inTable('ongs');//Criando a chave estrangeira, dizendo que o ong_id vai receber o id da tabela ongs
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
