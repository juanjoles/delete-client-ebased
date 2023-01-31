const {deleteClient} = require('../service/deleteClient');
const { deleteClientInput } = require('../schema/input/deleteClientInput');

module.exports = async (commandPayload, commandMeta) => {
    const client = new deleteClientInput(commandPayload,commandMeta).get();
    await deleteClient(client)
    return {status: 204};
};
