'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class HojaDeParte extends Model {
    functionMecanico(){
        return this.belongsTo('App/Models/MecanicoResponsable','mecanicoResponsable_id')
    }

}

module.exports = HojaDeParte
