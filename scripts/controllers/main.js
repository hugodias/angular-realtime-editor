'use strict';

app.controller('MainCtrl', ['$scope', 'angularFire',
  function MainCtrl($scope, angularFire) {
    var url = 'https://mychat.firebaseio.com/codemirror';
    var promise = angularFire(url, $scope, 'Code');

    $scope.page = false;

    promise.then(function() {
        startWatch($scope);
    });
  }
]);


function startWatch($scope) {

  $scope.$watch('Code', function () {
  }, true);

  $scope.createPage = function(name){
    $scope.Code.push({
      name: name,
      code: "// Do Stuff here"
    });
    $scope.current_index = $scope.Code.length - 1;
    $scope.editting = true;
    $scope.pagename = '';
  }

  $scope.sync = function(index){
    $scope.current_index = index;
    $scope.editting = true;
  }

  $scope.clean = function(){
    $scope.editting = [];
    $scope.current_index = false;
  }
}