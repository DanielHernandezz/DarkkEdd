'use strict'
const cliente = use('App/Models/Cliente')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clients
 */
class ClientController {
  /**
   * Show a list of all clients.
   * GET clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let clientes = await cliente.all()
    
    return view.render('cliente/cliente',{varclient: clientes.rows})

  }

  /**
   * Render a form to be used for creating a new client.
   * GET clients/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const add = new cliente()
    add.nombre = request.input('nombre')
    add.direccion = request.input('direccion')
    add.telefono = request.input('telefono')
    await add.save()  
    return response.redirect('cliente')
  }

  /**
   * Create/save a new client.
   * POST clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single client.
   * GET clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

  }

  /**
   * Render a form to update an existing client.
   * GET clients/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  async mostrarVista({view}){
    return view.render('cliente/crear')
  }
  async vistaEdit({view, params}){
    let cli = await cliente.find(params.id);
    return view.render('cliente/modificar',{cli})
  }
  

  /**
   * Update client details.
   * PUT or PATCH clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, view }) {
    const cli = await cliente.find(params.id)
    cli.nombre = request.input('nombre')
    cli.direccion = request.input('direccion')
    cli.telefono = request.input('telefono')
    cli.created_at = request.input('created_at')
    await cli.save()
    return view.render('cliente/modificar', {cli})
  }

  /**
   * Delete a client with id.
   * DELETE clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const clientes = await cliente.find(params.id);
    await clientes.delete()
    return response.redirect('back')
  }
}

module.exports = ClientController
