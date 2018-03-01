//实例一个模块，用来管理所有的控制器
angular.module("Controllers",[])
    .controller('DemoController', ['$scope', function ($scope) {
        console.log('启动了');
    }])
    //控制导航菜单
    .controller("NavsController",["$scope",function($scope){
        $scope.navs = [
            {link:"#/today",text:"今日一刻",icon:"icon-home"},
            {link:"#/older",text:"往期内容",icon:"icon-file-empty"},
            {link:"#/author",text:"热门作者",icon:"icon-pencil"},
            {link:"#/category",text:"栏目浏览",icon:"icon-menu"},
            {link:"#/favourite",text:"我的喜欢",icon:"icon-heart"},
            {link:"#/settings",text:"设置",icon:"icon-cog"}
        ]
    }])
    .controller("TodayController",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
        $rootScope.title="今日一刻";
        $rootScope.index=0;
        $rootScope.loaded=false;
        var today = $filter("date")(new Date,"yyyy-MM-dd");
        $http({
            url:"./api/today.php",
            method: "get",
            params:{today:today}
        }).then(function(info){
            $rootScope.loaded=true;
            $scope.posts = info.data.posts;
           $scope.date = info.data.date;
        })
}])
.controller("OlderController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
    $rootScope.title="往期内容";
    $rootScope.index = 1;
    $rootScope.loaded=false;
    $http({
        url:"./api/older.php",
        method: "get"
    }).then(function(info){
        $rootScope.loaded=true;
        $scope.posts = info.data.posts;
        $scope.date = info.data.date;
    })
}])
.controller("AuthorController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
    $rootScope.title="热门作者";
    $rootScope.index = 2;
    $rootScope.loaded = false;
    $http({
        url:"./api/author.php",
        method:"get"
    }).then(function(info){
        $rootScope.loaded = true;
        $scope.posts = info.data.authors;
    })
}])
.controller("CategoryController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
    $rootScope.title="栏目浏览";
    $rootScope.index = 3;
    $rootScope.loaded = false;
    $http({
        url:"./api/category.php",
        method:"get"
    }).then(function(info){
        $rootScope.loaded = true;
        $scope.posts = info.data.columns;
    })
}])
.controller("FavouriteController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
    $rootScope.title="我的喜欢";
    $rootScope.index = 4;
    $rootScope.loaded = false;
    $http({
        url:"./api/category.php",
        method:"get"
    }).then(function(info){
        $rootScope.loaded = true;
        $scope.posts = info.data.columns;
        $scope.total = info.data.total;
        console.log(info);
    })
}]);