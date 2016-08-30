import angular from 'angular'

function AppSidebarController() {
  var ctrl = this;

  // ctrl.version = require('./package.json').version;
  ctrl.version = "2.0.0"

  ctrl.contactTags = [{
    label: 'All contacts',
    icon: 'star',
    state: 'none'
  }, {
    label: 'Friends',
    icon: 'people',
    state: 'friends'
  }, {
    label: 'Family',
    icon: 'child_care',
    state: 'family'
  }, {
    label: 'Acquaintances',
    icon: 'accessibility',
    state: 'acquaintances'
  }, {
    label: 'Following',
    icon: 'remove_red_eye',
    state: 'following'
  }];
}

angular
  .module('common')
  .controller('AppSidebarController', AppSidebarController);