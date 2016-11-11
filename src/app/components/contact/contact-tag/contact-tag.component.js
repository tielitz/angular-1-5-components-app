angular
  .module('components.contact')
  .component('contactTag', {
    bindings: {
      tag: '<',
      onChange: '&'
    },
    templateUrl: './contact-tag.html',
    controller: function ContactTagController() {
      var ctrl = this;
      ctrl.$onInit = function () {
        ctrl.tags = [
          'friends', 'family', 'acquaintances', 'following'
        ];
      };
      ctrl.$onChanges = function (changes) {
        if (changes.tag) {
          ctrl.tag = angular.copy(ctrl.tag);
        }
      };
      ctrl.updateTag = function (tag) {
        ctrl.onChange({
          $event: {
            tag: tag
          }
        });
      };
    }
  });
