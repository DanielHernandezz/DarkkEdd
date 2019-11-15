'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MecanicoResponsableVehiculo extends Model {
    functionMecanico(){
        return this.belongsTo('App/Models/MecanicoResponsable','mecanicoResponsable_id')
    }
    functionVehiculo(){
        return this.belongsTo('App/Models/Vehiculo','vehiculo_id')
    }
}

module.exports = MecanicoResponsableVehiculo
