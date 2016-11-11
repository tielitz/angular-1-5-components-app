angular
  .module('components.auth')
  .component('register', {
    templateUrl: './register.html',
    controller: function RegisterController(AuthService, $state) {
      var ctrl = this;
      ctrl.$onInit = function () {
        ctrl.error = null;
        ctrl.user = {
          email: '',
          password: ''
        };
      };
      ctrl.createUser = function (event) {
        return AuthService
          .register(event.user)
          .then(function () {
            $state.go('app');
          }, function (reason) {
            ctrl.error = reason.message;
          });
      };
    }
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('auth.register', {
        url: '/register',
        component: 'register'
      });
  });
