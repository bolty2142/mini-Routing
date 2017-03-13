/**
 * Created by beebe on 3/13/2017.
 */
angular.module("miniRouting").controller("productsCtrl",function($scope,$stateParams,productService){

   if($stateParams.id === "shoes"){
       $scope.productData = productService.shoeData;
   }
   else if($stateParams.id === "socks"){
       $scope.productData = productService.sockData;
   }



});
