angular
  .module('components.contact')
  .component('contact', {
    bindings: {
      contact: '<',
      onSelect: '&'
    },
    templateUrl: './contact.html',
    controller: function ContactController() {
      var ctrl = this;
      ctrl.selectContact = function () {
        ctrl.onSelect({
          $event: {
            contactId: ctrl.contact.$id
          }
        });
      };
    }
  });
