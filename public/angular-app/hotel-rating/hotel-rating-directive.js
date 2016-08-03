// angular.module('meanhotel').directive('hotelRating', hotelRating);
//
// function hotelRating() {
//   return {
//     restrict: 'E',
//     template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
//     bindToController: true,
//     controller: 'HotelController',
//     controllerAs: 'vm',
//     scope: {
//       stars: '@'
//     }
//   }
// }

angular.module('meanhotel').component('hotelRating', {
  bindings: {
    stars: '='
  },
  template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
  controller: 'HotelController',
  controllerAs: 'vm'
});
