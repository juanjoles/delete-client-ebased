const config = require('ebased/util/config');
const dynamo = require ('ebased/service/storage/dynamo');
const { ErrorHandled } = require('ebased/util/error');
const TABLE_NAME = config.get('Clients')

const deleteClient = async(client) => {
    const params = {
        TableName: TABLE_NAME,
        Key:{
            pk:client.dni
        },
        UpdateExpression:'set Status = :r',
        ExpressionAttributeValues:{
            ':r': client.status = false
        },
    };
    await dynamo.updateItem(params)
}

 module.exports = {deleteClient};