angular.module('myApp', ['ngResource'])
  .controller('MainController', function($scope, $resource) {
    // Create a resource object for API communication
    var Item = $resource('https://api.example.com/items/:id');

    // Fetch items from the API
    Item.query(function(data) {
      $scope.items = data;
    });

    // Add a new item
    $scope.addItem = function() {
      var newItem = new Item();
      newItem.name = $scope.newItem;
      newItem.$save(function(response) {
        $scope.items.push(response);
        $scope.newItem = '';
      });
    };

    // Delete an item
    $scope.deleteItem = function(item) {
      Item.delete({ id: item.id }, function() {
        $scope.items.splice($scope.items.indexOf(item), 1);
      });
    };
  });