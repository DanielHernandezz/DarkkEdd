'use strict'
const hoja = use('App/Models/HojaDeParte')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with hojapartes
 */
class HojaParteController {
  /**
   * Show a list of all hojapartes.
   * GET hojapartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let hojas = await hoja.query().with('functionMecanico').fetch()
    return view.render('hoja/hoja',{varhoj: hojas.rows})
  }

  /**
   * Render a form to be used for creating a new hojaparte.
   * GET hojapartes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const add = new hoja()
    add.concepto = request.input('concepto')
    add.cantidad = request.input('cantidad')
    add.reparacion = request.input('reparacion')
    add.mecanicoResponsable_id = request.input('mecanicoResponsable_id')
    await add.save()  
    return response.redirect('hoja')
  }

  async mostrarVista({view}){
    return view.render('hoja/crear')
  }
  async vistaEdit({view, params}){
    let hoj = await hoja.find(params.id);
    return view.render('hoja/modificar',{hoj})
  }

  /**
   * Create/save a new hojaparte.
   * POST hojapartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single hojaparte.
   * GET hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing hojaparte.
   * GET hojapartes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update hojaparte details.
   * PUT or PATCH hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, view }) {
    const hoj = await hoja.find(params.id)
    hoj.concepto = request.input('concepto')
    hoj.cantidad = request.input('cantidad')
    hoj.reparacion = request.input('reparacion')
    hoj.mecanicoResponsable_id = request.input('mecanicoResponsable_id')
    hoj.created_at = request.input('created_at')
    hoj.save()
    return view.render('hoja/modificar',{hoj})
  }

  /**
   * Delete a hojaparte with id.
   * DELETE hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const hojas = await hoja.find(params.id);
    await hojas.delete()
    return response.redirect('back')
  }
}

module.exports = HojaParteController
