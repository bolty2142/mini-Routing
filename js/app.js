/**
 * Created by beebe on 3/13/2017.
 */
angular.module("miniRouting",["ui.router"]).config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when("","/");

    $stateProvider
        .state("home",{
            templateUrl:"home/homeTmpl.html",
            url:"/",
            controller:"homeCtrl"
        })
        .state("settings",{
            templateUrl:"settings/settingsTmpl.html",
            url:"/settings",
            controller:"settingsCtrl"
        })
        .state("products",{
            templateUrl:"products/productsTmpl.html",
            url:"/products/:id",
            controller:"productsCtrl"
        })

});