angular.module('meanhotel', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');

  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/main/main.html',
      access: {
        restricted: false
      }
    })
    .when('/hotels', {
      templateUrl: 'angular-app/hotel-list/hotels.html',
      controller: HotelsController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/hotel/:id', {
      templateUrl: 'angular-app/hotel-display/hotel.html',
      controller: HotelController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/register', {
      templateUrl: 'angular-app/register/register.html',
      controller: RegisterController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/profile', {
      templateUrl: 'angular-app/profile/profile.html',
      access: {
        restricted: true
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}

function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
}
