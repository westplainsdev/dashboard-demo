(function() {
  'use strict';

  // class defintion
  class HomeCtrl {
    // remember to pass any dependencies
    constructor(Service, $timeout) {
      // make sure that your dependency is wired into the class
      this.service = Service;
      this.$timeout = $timeout;

      // anything else you would like to do when this class initializes
      this.processing = false;
      this.isReady = false;
      this.loadTitle();
    }

    // just a class function example
    loadTitle() {
      return (this.name = 'Dashboard Home View');
    }
    // just a class function example
    showServiceResult() {
      this.isReady = false;
      this.processing = true;
      // showing the use of an AngularJS timeout in ES6
      this.$timeout(() => {
        // use your dependency freely now
        this.serviceReturn = this.service.get();
        this.isReady = true;
        this.processing = false;
      }, 2000);
    }
  }
  
  // this is the dependency injection of a service into the controller
  HomeCtrl.$inject = ['Service', '$timeout'];
  angular.module('plunker').controller('Home.Ctrl', HomeCtrl);
})();
