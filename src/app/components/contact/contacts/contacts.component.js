angular
  .module('components.contact')
  .component('contacts', {
    bindings: {
      contacts: '<',
      filter: '<'
    },
    templateUrl: './contacts.html',
    controller: function ContactsController($filter, $state) {
      var ctrl = this;
      var contacts = ctrl.contacts;

      ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter);

      ctrl.goToContact = function (event) {
        $state.go('contact', {
          id: event.contactId
        });
      };
    }
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacts', {
        parent: 'app',
        url: '/contacts?filter',
        component: 'contacts',
        params: {
          filter: {
            value: 'none'
          }
        },
        resolve: {
          contacts: function (ContactService) {
            return ContactService.getContactList().$loaded();
          },
          filter: function ($transition$) {
            return $transition$.params();
          }
        }
      });
  });
