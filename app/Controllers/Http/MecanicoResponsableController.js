'use strict'
const mecanico = use('App/Models/MecanicoResponsable')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicoresponsables
 */
class MecanicoResponsableController {
  /**
   * Show a list of all mecanicoresponsables.
   * GET mecanicoresponsables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let mecanicos = await mecanico.all()
    return view.render('mecres/mecres',{varmecres: mecanicos.rows})
  }

  /**
   * Render a form to be used for creating a new mecanicoresponsable.
   * GET mecanicoresponsables/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const add = new mecanico()
    add.nombre = request.input('nombre')
    add.direccion = request.input('direccion')
    add.tel = request.input('tel')
    add.costoXHora = request.input('costoXHora')
    add.categoria = request.input('categoria')
    await add.save()  
    return response.redirect('mecres')
  }

  /**
   * Create/save a new mecanicoresponsable.
   * POST mecanicoresponsables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single mecanicoresponsable.
   * GET mecanicoresponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing mecanicoresponsable.
   * GET mecanicoresponsables/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }
  
  async mostrarVista({view}){
    return view.render('mecres/crear')
  }

  async vistaEdit({view, params}){
    let meres = await mecanico.find(params.id);
    return view.render('mecres/modificar',{meres})
  }

  /**
   * Update mecanicoresponsable details.
   * PUT or PATCH mecanicoresponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, view }) {
    const meres = await mecanico.find(params.id)
    meres.nombre = request.input('nombre')
    meres.direccion = request.input('direccion')
    meres.tel = request.input('tel')
    meres.costoXHora = request.input('costoXHora')
    meres.categoria = request.input('categoria')
    meres.created_at = request.input('created_at')
    meres.save()
    return view.render('mecres/modificar',{meres})
  }

  /**
   * Delete a mecanicoresponsable with id.
   * DELETE mecanicoresponsables/:id
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

module.exports = MecanicoResponsableController
