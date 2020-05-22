const connection = require('../database/connection')
const crypto = require('crypto') 


module.exports = {

    async index (request, response) { //METODO INDEX FAZ A LISTAGEM
    const ongs = await connection('ongs').select('*')
    return response.json(ongs)
 },
  
    async create(request, response){ // METODO CRATE


    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })



    return response.json({ id })

    }
    
}