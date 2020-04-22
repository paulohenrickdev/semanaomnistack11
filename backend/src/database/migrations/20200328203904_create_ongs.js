//npx knex migrate:make create_incidents Este é o camando via CMD para criar uma migration
exports.up = function(knex) {//Metodo UP é responsavel pela criação da tabela
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();//Criando a coluna de ID e dizendo que ela é a chave primaria
    table.string('name').notNullable();//Criando a coluna nome e dizendo que não pode ser nulo
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();//Criando a coluna UF, dizendo que ela nao pode ser nula e estabelecendo a string como o tam = 2
  });
};

exports.down = function(knex) {//Se der algum problema e eu precisar de voltar atrás
  return knex.schema.dropTrable('ongs');
};

//Logo após tudo prono, utilizar o comando: npx knex migrate:latest para assim, a tabela ir para o arquivo db.sqlite