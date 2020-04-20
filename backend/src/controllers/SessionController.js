//const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {

    async create(request, response) {
        
        const id = request.body.id;

        console.log('222222');
        console.log('---id--');
        console.log(id);
        //const ong_id = request.headers.authorization;

        const ong = await connection('ongs')
        .where('id',id)
        .select('name')
        .first();
        
        if(!ong){
            return response.status(400).json({error: 'No ONG  found with this ID'});            
        }

        return response.json(ong);

    }   


};