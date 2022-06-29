function controllerApiGET(request, response) {
    response.json({
        'message': 'Hola',
        request: 'GET'
    })
};

function controllerApiPOST(request, response) {
    response.json({
        'message': 'Hola',
        request: 'POST'
    })
};

function controllerApiPUT(request, response) {
    response.json({
        'message': 'Hola',
        request: 'PUT'
    })
};

function controllerApiDelete(request, response) {
    response.json({
        'message': 'Hola',
        request: 'DELETE'
    })
};

module.exports = {
    controllerApiGET,
    controllerApiPOST,
    controllerApiPUT,
    controllerApiDelete
}