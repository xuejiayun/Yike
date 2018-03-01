
var Yike = angular.module('Yike', ['ngRoute', 'Controllers',"Directives"]);

Yike.config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/today",{
        templateUrl:"./views/today.html",
        controller:"TodayController"
    })
    .when("/older",{
        templateUrl:"./views/older.html",
        controller:"OlderController"
    })
        .when("/author",{
            templateUrl:"./views/author.html",
            controller:"AuthorController"
        })
        .when("/category",{
            templateUrl:"./views/category.html",
            controller:"CategoryController"
        })
        .when("/favourite",{
            templateUrl:"./views/favourite.html",
            controller:"FavouriteController"
        })
        .when("/settings",{
            templateUrl:"./views/settings.html",
            controller:""
        })
    .otherwise({
        redirectTo:"/today"
    })
}]);
Yike.run(["$rootScope",function($rootScope){
    $rootScope.collapsed = false;
    $rootScope.toggle = function(){
        $rootScope.collapsed = !$rootScope.collapsed;
            var navs = document.querySelectorAll('.navs dd');
            if($rootScope.collapsed) {
                for(var i=0; i<navs.length; i++) {
                    navs[i].style.transform = 'translate(0)';
                    navs[i].style.transitionDelay = '0.2s';
                    navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
                }
            } else {
                var len = navs.length - 1;
                for(var j=len; j>0; j--) {
                    // console.log(navs.length - j + 1);
                    navs[j].style.transform = 'translate(-100%)';
                    navs[j].style.transitionDelay = '';
                    navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
                }
            }
        }
    }]);
