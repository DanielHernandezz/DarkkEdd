'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HojaDeParteSchema extends Schema {
  up () {
    this.create('hoja_de_partes', (table) => {
      table.increments()
      table.string('concepto',45).notNullable()
      table.integer('cantidad').notNullable()
      table.string('reparacion',45).notNullable()
      table.integer('mecanicoResponsable_id').unsigned().references('id').inTable('mecanico_responsables').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('hoja_de_partes')
  }
}

module.exports = HojaDeParteSchema
