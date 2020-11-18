const { index } = require("./OngController");

const connection = require('../database/connection')
module.exports = {
    async index(request, response){
      const ong_id  = request.headers.authorization; 

      const incidents = await connection('incidets')
      .where('ong_id', ong_id)
      .select('*')

      return response.json(incidents);
    }
}