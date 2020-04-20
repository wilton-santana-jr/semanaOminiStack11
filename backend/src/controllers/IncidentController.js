//const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {


    async index(request, response) {

        const {page = 1} = request.query;

        const [qtdIncidents] = await connection('incidents').count();

       //console.log(qtdIncidents.count);


        const incidents = await connection('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id')        
        .limit(5)
        .offset((page-1)*5)
        .select(['incidents.*','ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf']);


        response.header('X-Total-Count',qtdIncidents.count);


        return response.json(incidents);
    },

    async delete(request, response) {

        const idIncidentParamsRoute = request.params.id;    
        const ong_id = request.headers.authorization;

        //const id = crypto.randomBytes(4).toString('HEX');

        console.log('---- request id params route ------');
        console.log(idIncidentParamsRoute);


        const incident =  await connection('incidents').where('id',idIncidentParamsRoute).select('ong_id').first();


        if(incident.ong_id != ong_id){
            return response.status(401).json({error: "Operation Not Permitted."});
        }

        await connection('incidents').where('id',idIncidentParamsRoute).delete();

        return response.status(204).send();
        
    }
    
    ,
    async create(request, response) {

        const { title, description, value } = request.body;

        const ong_id = request.headers.authorization;

        //const id = crypto.randomBytes(4).toString('HEX');

        console.log('---- Body Params ------');
        console.log(request.body);



        const result = await connection('incidents').insert({          
            title,
            description,
            value,
            ong_id          
        });

        
        const retornoInserido = await connection('incidents').select('id').where({
                title: title,
                description:  description,
                value: value,
                ong_id: ong_id
              }).orderBy('id', 'desc');         

        //const id = result.rowCount;
        const id = retornoInserido[0].id;

        console.log('-- id criado --');
        console.log(id);
        

        return response.json({ 
            "id": id,
            "msg": 'Caso inserido com sucesso!',
            "casoInserido": title ,
            "descritpion":description,
            "value": value
        });
    }

};