'use strict'
const vehiculo = use('App/Models/Vehiculo')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with vehiculos
 */
class VehiculoController {
  /**
   * Show a list of all vehiculos.
   * GET vehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let vehiculos = await vehiculo.query().with('functionCliente').fetch()
    return view.render('vehiculo/vehiculo',{varvehi: vehiculos.rows})
  }

  /**
   * Render a form to be used for creating a new vehiculo.
   * GET vehiculos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const add = new vehiculo()
    add.modelo = request.input('modelo')
    add.color = request.input('color')
    add.fecha = request.input('fecha')
    add.hora_ent = request.input('hora_ent')
    add.cliente_id = request.input('cliente_id')
    await add.save()  
    return response.redirect('vehiculo')
  }

  /**
   * Create/save a new vehiculo.
   * POST vehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single vehiculo.
   * GET vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }
  async mostrarVista({view}){
    return view.render('vehiculo/crear')
  }

  async vistaEdit({view,params}){
    let vehi = await vehiculo.find(params.id);
    return view.render('vehiculo/modificar',{vehi})
  }

  /**
   * Render a form to update an existing vehiculo.
   * GET vehiculos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update vehiculo details.
   * PUT or PATCH vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({params, request, view}) {
    const vehi = await vehiculo.find(params.id)
    vehi.modelo = request.input('modelo')
    vehi.color = request.input('color')
    vehi.fecha = request.input('fecha')
    vehi.hora_ent = request.input('hora_ent')
    vehi.cliente_id = request.input('cliente_id')
    vehi.created_at = request.input('created_at')
    vehi.save()
    return view.render('vehiculo/modificar',{vehi})
  }

  /**
   * Delete a vehiculo with id.
   * DELETE vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const vehiculos = await vehiculo.find(params.id);
    await vehiculos.delete()
    return response.redirect('back')
  }
}

module.exports = VehiculoController
