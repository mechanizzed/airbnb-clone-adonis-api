'use strict';

const Route = use('Route');

// Users
Route.post('/users', 'UserController.create');
Route.post('sessions', 'SessionController.create');

// Properties
Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth');

// Images Properties
// Create
Route.post('properties/:id/images', 'ImageController.store').middleware('auth');

// Get
Route.get('images/:path', 'ImageController.show');
