var myApp = angular.module('crudController', []);

myApp.controller('crudController', ['$scope', function ($scope) {

    console.log('In my Array Controller');

    $scope.users = [
        {
            username: "Luigi",
            email: "luigi.zun@gmai.com",
            fullname: "Albert Zuniga"
        },
        {
            username: "Jhon",
            email: "Jhon.Salc@gmai.com",
            fullname: "Jhon Salc"
        },
        {
            username: "Hector",
            email: "Hector.per@gmai.com",
            fullname: "Soto Perez"
        },
        {
            username: "diego",
            email: "liego.zaf@gmai.com",
            fullname: "Zafrada maulme"
        }
    ];

}])
