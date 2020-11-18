const { create, index } = require("./OngController");

const connection = require('../database/connection');
const { request } = require("express");
const { report } = require("../routes");


module.exports = {async index(request,response){
const {page = 1} = request.query;

const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
    .join('ong', 'ong_id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page - 1) *5)
    .select([
         'incidents*',
         'ongs.name',
         'ongs.email',
         'ongs.whatsapp',
         'ongs.city',
         'ongs.uf'
        ]);

    response.header('X-Total-Count',count['count(*)']);

    return response.json(incidents)
},


async create(resquest,response){
    const {title, ong_id, description, value } = resquest.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
    });
    return response.json({id});
},
async delete(request,response){
    const{id} = resquest.params;
    const ong_id = resquest.headers.authorization;

    const incidents = await connection('incidents')
    .where('id', id)
    .select('ong_id')
    .first();

    if (incidents.ong_id = ong_id){
        return response.status(401).json({erro: 'opration not permitted.'});
    }

    await connection('incidents').where('id',id).delete();

    return response.status(204).send();
}

};