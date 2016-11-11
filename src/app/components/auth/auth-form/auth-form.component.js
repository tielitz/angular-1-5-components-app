angular
  .module('components.auth')
  .component('authForm', {
    bindings: {
      user: '<',
      button: '@',
      message: '@',
      onSubmit: '&'
    },
    templateUrl: './auth-form.html',
    controller: function AuthFormController() {
      var ctrl = this;
      ctrl.$onChanges = function (changes) {
        if (changes.user) {
          ctrl.user = angular.copy(ctrl.user);
        }
      };
      ctrl.submitForm = function () {
        ctrl.onSubmit({
          $event: {
            user: ctrl.user
          }
        });
      };
    }
});
