'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepuestoSchema extends Schema {
  up () {
    this.create('repuestos', (table) => {
      table.increments()
      table.string('descripcion',45).notNullable()
      table.integer('costoUnit').notNullable()
      table.integer('precioUnit').notNullable()
      table.integer('impParcial').notNullable()
      table.integer('hojaDeParte_id').unsigned().references('id').inTable('hoja_de_partes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('repuestos')
  }
}

module.exports = RepuestoSchema
