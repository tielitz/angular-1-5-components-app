angular
  .module('components.contact')
  .component('contactNew', {
    templateUrl: './contact-new.html',
    controller: function ContactNewController(ContactService, $state) {
      var ctrl = this;
      ctrl.$onInit = function () {
        ctrl.contact = {
          name: '',
          email: '',
          job: '',
          location: '',
          social: {
            facebook: '',
            github: '',
            twitter: '',
            linkedin: ''
          },
          tag: 'none'
        };
      };
      ctrl.createNewContact = function (event) {
        return ContactService
          .createNewContact(event.contact)
          .then(function (contact) {
            $state.go('contact', {
              id: contact.key
            });
          });
      };
    }
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('new', {
        parent: 'app',
        url: '/new',
        component: 'contactNew'
      });
  });
