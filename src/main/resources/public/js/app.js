function PersonController($scope, $http) {

    $scope.item = {};

    // List Products
    $http({method: 'GET', url: 'rest/people'}).then(
        function successCallback(response) {
            $scope.itens = response.data;
        },
        function errorCallback(response) {
            toastr.error("Ocorreu um erro ao carregar lista de produtos.");
    });
}