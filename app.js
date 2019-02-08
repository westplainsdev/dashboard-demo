(function(){
  angular.module('plunker', ['ui.router','ui.bootstrap','ngAnimate']).config(RouteConfig)

    function RouteConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
         .state('home', {
            url: '/home',
            templateUrl: './home/home.html',   
            // controllerAs syntax to avoid using $scope in the controller 
            controller: 'Home.Ctrl as vm'
        }) 
        .state('structure', {
            url: '/structure',
            templateUrl: './structure/structure.html',   
            // controllerAs syntax to avoid using $scope in the controller
            controller: 'Structure.Ctrl as vm'
        })     
        .state('about', {
            url: '/about',
            templateUrl: './about/about.html',   
            // controllerAs syntax to avoid using $scope in the controller
            controller: 'About.Ctrl as vm'
        });
    }
})();

// NOTE: anything you alias your controller as will be what is used 
// in the view. For examle, Home.Ctrl is now vm. VM will be what is 
// used on the home view to access the controllers bindings for example
// vm.message will display a the message from the Home.Ctrl class' this.message.