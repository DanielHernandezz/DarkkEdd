'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repuesto extends Model {
    functionHoja(){
        return this.belongsTo('App/Models/HojaDeParte','hojaDeParte_id')
    }
}

module.exports = Repuesto
