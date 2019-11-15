'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehiculo extends Model {

    functionCliente(){
        return this.belongsTo('App/Models/Cliente','cliente_id')
    }
}

module.exports = Vehiculo
