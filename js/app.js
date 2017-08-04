var myApp  =  angular.module( 'crudController', []);

myApp = controller('crudController',['$scope' , function($scope){
   
    $scope.users = [
        {username:"Francisca",email:"fran.lore@gmai.com",fullname:"Lorena Gonzalez"}
    ]
    
}])