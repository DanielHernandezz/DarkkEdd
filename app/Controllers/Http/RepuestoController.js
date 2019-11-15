'use strict'
const repuesto = use('App/Models/Repuesto')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with repuestos
 */
class RepuestoController {
  /**
   * Show a list of all repuestos.
   * GET repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let repuestos = await repuesto.query().with('functionHoja').fetch()
    return view.render('repuesto/repuesto',{varre: repuestos.rows})
  }

  /**
   * Render a form to be used for creating a new repuesto.
   * GET repuestos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const add = new repuesto()
    add.descripcion = request.input('descripcion')
    add.costoUnit = request.input('costoUnit')
    add.precioUnit = request.input('precioUnit')
    add.impParcial = request.input('impParcial')
    add.hojaDeParte_id = request.input('hojaDeParte_id')
    await add.save()  
    return response.redirect('repuesto')
  }

  /**
   * Create/save a new repuesto.
   * POST repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single repuesto.
   * GET repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing repuesto.
   * GET repuestos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  async mostrarVista({view}){
    return view.render('repuesto/crear')
  }
  async vistaEdit({view, params}){
    let rep = await repuesto.find(params.id);
    return view.render('repuesto/modificar',{rep})
  }
  /**
   * Update repuesto details.
   * PUT or PATCH repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, view }) {
    const rep = await repuesto.find(params.id)
    rep.descripcion = request.input('descripcion')
    rep.costoUnit = request.input('costoUnit')
    rep.precioUnit = request.input('precioUnit')
    rep.impParcial = request.input('impParcial')
    rep.costoUnit = request.input('costoUnit')
    rep.hojaDeParte_id = request.input('hojaDeParte_id')
    rep.save()
    return view.render('repuesto/modificar',{rep})
  }

  /**
   * Delete a repuesto with id.
   * DELETE repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const repuestos = await repuesto.find(params.id);
    await repuestos.delete()
    return response.redirect('back')
  }
}

module.exports = RepuestoController
