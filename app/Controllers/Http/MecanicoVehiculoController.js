'use strict'
const mecanico = use('App/Models/MecanicoResponsableVehiculo')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicovehiculos
 */
class MecanicoVehiculoController {
  /**
   * Show a list of all mecanicovehiculos.
   * GET mecanicovehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
      let mecanicos = await mecanico.query().with('functionMecanico').with('functionVehiculo').fetch()
      return view.render('responsable/responsable',{varres: mecanicos.rows})
    }

  /**
   * Render a form to be used for creating a new mecanicovehiculo.
   * GET mecanicovehiculos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const add = new mecanico()
    add.mecanicoResponsable_id = request.input('mecanicoResponsable_id')
    add.vehiculo_id = request.input('vehiculo_id')
    await add.save()  
    return response.redirect('responsable')
  }

  /**
   * Create/save a new mecanicovehiculo.
   * POST mecanicovehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single mecanicovehiculo.
   * GET mecanicovehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing mecanicovehiculo.
   * GET mecanicovehiculos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update mecanicovehiculo details.
   * PUT or PATCH mecanicovehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, view }) {
    const meca = await mecanico.find(params.id)
    meca.mecanicoResponsable_id = request.input('mecanicoResponsable_id')
    meca.vehiculo_id = request.input('vehiculo_id')
    meca.created_at = request.input('created_at')
    meca.save()
    return view.render('responsable/modificar',{meca})
  }
  async mostrarVista({view}){
    return view.render('responsable/crear')
  }
  async vistaEdit({view, params}){
    let meca = await mecanico.find(params.id);
    return view.render('responsable/modificar',{meca})
  }

  /**
   * Delete a mecanicovehiculo with id.
   * DELETE mecanicovehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const mecanicos = await mecanico.find(params.id);
    await mecanicos.delete()
    return response.redirect('back')
  }
}

module.exports = MecanicoVehiculoController
