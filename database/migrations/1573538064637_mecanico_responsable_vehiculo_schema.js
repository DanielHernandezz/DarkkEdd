'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicoResponsableVehiculoSchema extends Schema {
  up () {
    this.create('mecanico_responsable_vehiculos', (table) => {
      table.increments()
      table.integer('mecanicoResponsable_id').unsigned().references('id').inTable('mecanico_responsables').notNullable()
      table.integer('vehiculo_id').unsigned().references('id').inTable('vehiculos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('mecanico_responsable_vehiculos')
  }
}

module.exports = MecanicoResponsableVehiculoSchema
