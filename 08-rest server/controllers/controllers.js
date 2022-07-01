function controllerApiGET(request, response) {
    response.json({
        'message': 'Hola',
        request: 'GET'
    })
};

function controllerApiPOST(request, response) {
    const { name } = request.body;

    response.json({
        'message': 'Hola',
        request: 'POST',
        name
    })
};

function controllerApiPUT(request, response) {
    const { id } = request.params;

    response.json({
        'message': 'Hola',
        request: 'PUT',
        id
    })
};

function controllerApiDelete(request, response) {
    const query = request.query;

    response.json({
        'message': 'Hola',
        request: 'DELETE',
        query
    })
};

module.exports = {
    controllerApiGET,
    controllerApiPOST,
    controllerApiPUT,
    controllerApiDelete
}