'use strict'
const factura = use('App/Models/Factura')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with facturas
 */
class FacturaController {
  /**
   * Show a list of all facturas.
   * GET facturas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let facturas = await factura.all()
    return view.render('factura/factura',{varfact: facturas.rows})
  }

  /**
   * Render a form to be used for creating a new factura.
   * GET facturas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const add = new factura()
    add.fecha = request.input('fecha')
    add.imp_pesos = request.input('imp_pesos')
    add.imp_dol = request.input('imp_dol')
    add.rfc = request.input('rfc')
    await add.save()  
    return response.redirect('factura')
  }

  /**
   * Create/save a new factura.
   * POST facturas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single factura.
   * GET facturas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing factura.
   * GET facturas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update factura details.
   * PUT or PATCH facturas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async mostrarVista({view}){
    return view.render('factura/crear')
  }

  async vistaEdit({view, params}){
    let fac = await factura.find(params.id);
    return view.render('factura/modificar',{fac})
  }

  async update ({ params, request, view }) {
    const fac = await factura.find(params.id)
    fac.fecha = request.input('fecha')
    fac.imp_pesos = request.input('imp_pesos')
    fac.imp_dol = request.input('imp_dol')
    fac.rfc = request.input('rfc')
    fac.created_at = request.input('created_at')
    fac.save()
    return view.render('factura/modificar',{fac})
  }

  /**
   * Delete a factura with id.
   * DELETE facturas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let facturas = await factura.find(params.id)
    await facturas.delete()
    return response.redirect('back')
  }
}

module.exports = FacturaController
