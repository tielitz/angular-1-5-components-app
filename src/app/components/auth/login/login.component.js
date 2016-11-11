angular
  .module('components.auth')
  .component('login', {
    templateUrl: './login.html',
    controller: function LoginController(AuthService, $state) {
      var ctrl = this;
      ctrl.$onInit = function () {
        ctrl.error = null;
        ctrl.user = {
          email: '',
          password: ''
        };
      };
      ctrl.loginUser = function (event) {
        return AuthService
          .login(event.user)
          .then(function () {
            $state.go('app');
          }, function (reason) {
            ctrl.error = reason.message;
          });
      };
    }
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('auth', {
        redirectTo: 'auth.login',
        url: '/auth',
        template: '<div ui-view></div>'
      })
      .state('auth.login', {
        url: '/login',
        component: 'login'
      });
    $urlRouterProvider.otherwise('/auth/login');
  });
