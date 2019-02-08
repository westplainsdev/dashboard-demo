(function() {
  'use strict';

  // class defintion 
  class AboutCtrl{
    constructor(){
      // example of building an object 
      this.angularVersion = {
        number: angular.version.full,
        codename: angular.version.codeName,
        // using an ES6 string literal 
        shortForm: `${angular.version.full} - "${angular.version.codeName}"`
      }
     
      this.name = this.loadTitle();
      this.version = this.angularVersion;
    }

    // just a function example
    loadTitle() {
      return 'Dashboard About View';
    }
  }
  angular.module('plunker').controller('About.Ctrl', AboutCtrl);

}());
