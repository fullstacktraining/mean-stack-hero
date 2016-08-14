angular.module('meanhotel', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/hotel-list/hotels.html',
      controller: HotelsController,
      controllerAs: 'vm'
    })
    .when('/hotel/:id', {
      templateUrl: 'angular-app/hotel-display/hotel.html',
      controller: HotelController,
      controllerAs: 'vm'
    });
}
