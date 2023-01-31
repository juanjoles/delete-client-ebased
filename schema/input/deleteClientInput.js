const {InputValidation} = require('ebased/schema/inputValidation');

class deleteClientInput extends InputValidation {
    constructor(payload, meta) {
        super({
            source: meta.status,
            payload: payload,
            source: "CLIENT.DELETE",
            specversion:"v1.0.0",
            schema:{
                dni:{type:String, required:true}
            },
        });
    }
}

module.exports = {deleteClientInput}