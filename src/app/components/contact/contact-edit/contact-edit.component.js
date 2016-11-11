angular
  .module('components.contact')
  .component('contactEdit', {
    bindings: {
      contact: '<'
    },
    templateUrl: './contact-edit.html',
    controller: function ContactEditController($state, ContactService, cfpLoadingBar, $window) {
      var ctrl = this;
      /**
       * @ngdoc method
       * @name ContactEditController#updateContact
       *
       * @param {event} event Receive the emitted event
       * Updates the contact information
       *
       * @return {method} ContactService returns the updateContact method and a promise
       */
      ctrl.updateContact = function (event) {
        cfpLoadingBar.start();
        return ContactService
          .updateContact(event.contact)
          .then(cfpLoadingBar.complete, cfpLoadingBar.complete);
      };
      /**
       * @ngdoc method
       * @name ContactEditController#deleteContact
       *
       * @param {event} event Delete the contact
       *
       * @return {method} ContactService returns the deleteContact method and a promise
       */
      ctrl.deleteContact = function (event) {
        var message = 'Delete ' + event.contact.name + ' from contacts?';
        if ($window.confirm(message)) {
          return ContactService
            .deleteContact(event.contact)
            .then(function () {
              $state.go('contacts');
            });
        }
      };
    }
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        parent: 'app',
        url: '/contact/:id',
        component: 'contactEdit',
        resolve: {
          contact: function ($transition$, ContactService) {
            var key = $transition$.params().id;
            return ContactService.getContactById(key).$loaded();
          }
        }
      });
  });
