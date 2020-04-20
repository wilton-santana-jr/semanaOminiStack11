const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');






const routes = express.Router();



/**
 * Metodos HTTP
 * GET: BUSCAR UMA INFORMAÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * DELETE: DELETAR ALGUMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR ALGUMA INFORMAÇÃO NO BACK-END
 */


 /**
  * Tipos de Parâmetros
  * 
  * Query Params: parâmetros nomeados enviados na rota apos o simbolo de ? e servem para filtros, paginação
  * acessa pelo request.query
  * Route Params: parâmetros utilizados para identificar recursos /users/:id
  * acessa pelo request.params
  * Request Body:Corpo da requisição usado para criar ou alterar recursos 
  * como usuario nome email e por ai vai
  * 
  */

  //http://localhost:3333/users/1/?name=Wilton Júnior&page=10
  routes.get('/users/:id', (request,response) => {

    const params = request.query;
    console.log('Query Params');
    console.log(params);

    const paramsRoute = request.params
    console.log('Route Params');
    console.log(paramsRoute);


    return response.json({
        evento:'Semana OmniStack 11.0',
        aluno: 'Wilton Moreira de Santana Junior',
        parametroQueryName: params.name,
        parametroQueryPage: params.page,
        parametroRouteId: paramsRoute.id

    });
});

//http://localhost:3333/createUser
//envia no body no corpo da requisicao um request json com os dados do cliente
//{
//	"name": "Wilton Jr",
//	"id": 33
//}
routes.post('/createUser', (request,response) => {

    const bodyParams = request.body;
    console.log('---- Body Params ------');
    console.log(bodyParams);

    return response.json({ 
        msg: 'Cliente cadastrado com sucesso!',       
        nomeCliente: request.body.name,
        idadeCliente: request.body.idade
    });
});


routes.post('/sessions', SessionController.create);

//http://localhost:3333/ongs
//envia no body no corpo da requisicao um request json com os dados da ong
routes.post('/ongs', OngController.create);

/**
 * List todas as ongs cadastradas
 */
routes.get('/ongs', OngController.index);




routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);




module.exports = routes;