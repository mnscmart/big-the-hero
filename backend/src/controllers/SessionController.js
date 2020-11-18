const connection = require('../database/connection')


module.exports = {
    async index(request, response){


        const ong = await connection('ong')
        .where('id', id)
        .select('nome')
        .first();

        if(!ong){
            return response.status(400).json({erro: 'NO ONG found with this ID'})
        }

return response.json(ong);

    }
}