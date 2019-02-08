(function() {
  // A service is a basic ES6 class.
  class Service {
    constructor($http) {
      this.$http = $http;
    }
    
    // functions accessible from the class
    get() {
      return 'This service works!';
    }
  }

  // The reason we have the angular.module last is becaue ES2015 Classes are
  // not hoisted so if the are referenced before we define them we get a
  // reference error.
  angular.module('plunker').service('Service', Service);
})();
