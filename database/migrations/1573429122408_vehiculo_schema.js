'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiculoSchema extends Schema {
  up () {
    this.create('vehiculos', (table) => {
      table.increments()
      table.string('modelo',45).notNullable()
      table.string('color',45).notNullable()
      table.date('fecha').notNullable()
      table.time('hora_ent').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('vehiculos')
  }
}

module.exports = VehiculoSchema
