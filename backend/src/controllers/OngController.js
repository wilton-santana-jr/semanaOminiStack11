const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {


    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        console.log('---- Body Params ------');
        console.log(request.body);



        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })


        return response.json({
            msg: 'Ong cadastrada com sucesso!',
            id: id,
            name: name,
            email: email,
            whatsapp: whatsapp,
            city: city,
            uf: uf
        });
    }

}