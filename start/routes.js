'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

//Cliente
Route.get('cliente/cliente', 'ClientController.index')
Route.get('cliente/cliente/:id', 'ClientController.destroy')
Route.get('cliente/clienteCreate' , 'ClientController.mostrarVista')
Route.get('cliente/clienteCreate/:id' , 'ClientController.vistaEdit')
Route.post('cliente/clienteCreate/:id' , 'ClientController.update')
Route.post('cliente/clienteCreate' , 'ClientController.create')

//vehiculo
Route.get('/vehiculo/vehiculo', 'VehiculoController.index')
Route.get('/vehiculo/delete/:id', 'VehiculoController.destroy')
Route.get('/vehiculo/vehiEdit/:id', 'VehiculoController.vistaEdit')
Route.get('/vehiculo/vehiCreate/', 'VehiculoController.mostrarVista')
Route.post('/vehiculo/vehiEdit/:id' , 'VehiculoController.update')
Route.post('/vehiculo/create' , 'VehiculoController.create')

//Mecanico Responsable
Route.get('/mecres/mecres', 'MecanicoResponsableController.index')
Route.get('/mecres/delete/:id', 'MecanicoResponsableController.destroy')
Route.get('/mecres/mecresEdit/:id', 'MecanicoResponsableController.vistaEdit')
Route.get('/mecres/mecresCreate/', 'MecanicoResponsableController.mostrarVista')
Route.post('/mecres/mecresEdit/:id', 'MecanicoResponsableController.update')
Route.post('/mecres/create', 'MecanicoResponsableController.create')

//Factura
Route.get('/factura/factura', 'FacturaController.index')
Route.get('/factura/factura/:id', 'FacturaController.destroy')
Route.get('/factura/factCreate/', 'FacturaController.mostrarVista')
Route.get('/factura/factEdit/:id', 'FacturaController.vistaEdit')
Route.post('/factura/factEdit/:id', 'FacturaController.update')
Route.post('/factura/create', 'FacturaController.create')

//Mecanico Responsable Vehiculo
Route.get('/responsable/responsable', 'MecanicoVehiculoController.index')
Route.get('/responsable/delete/:id', 'MecanicoVehiculoController.destroy')
Route.get('/responsable/resEdit/:id', 'MecanicoVehiculoController.vistaEdit')
Route.get('/responsable/resCreate/', 'MecanicoVehiculoController.mostrarVista')
Route.post('/responsable/resEdit/:id', 'MecanicoVehiculoController.update')
Route.post('/responsable/create', 'MecanicoVehiculoController.create')

//Hoja de Partes
Route.get('/hoja/hoja', 'HojaParteController.index')
Route.get('/hoja/delete/:id', 'HojaParteController.destroy')
Route.get('/hoja/hojEdit/:id', 'HojaParteController.vistaEdit')
Route.get('/hoja/hojCreate/', 'HojaParteController.mostrarVista')
Route.post('/hoja/hojEdit/:id', 'HojaParteController.update')
Route.post('/hoja/create', 'HojaParteController.create')

//Repuesto
Route.get('/repuesto/repuesto', 'RepuestoController.index')
Route.get('/repuesto/delete/:id', 'RepuestoController.destroy')
Route.get('/repuesto/reEdit/:id', 'RepuestoController.vistaEdit')
Route.get('/repuesto/reCreate/', 'RepuestoController.mostrarVista')
Route.post('/repuesto/reEdit/:id', 'RepuestoController.update')
Route.post('/repuesto/create', 'RepuestoController.create')