var app = angular.module('jockey');
app.controller('recordCon', function($scope,$http,$rootScope,$stateParams,$state) {
  
   
    console.log('asas'+$stateParams._id)
  
    
    
      $http({
                    method: 'GET',
                    url:'http://localhost/mobile/record/'+$stateParams._id
            }).then(
              function successCallback(rs){
              console.log(rs.data)
                     $scope.rec=rs.data.rec;
            
              
              
              
                    },
              function errorCallback(response){
                  
               
              });
    
    
    
$scope.save=function(){
   
      $http({
                    method: 'PUT',
                    url:'http://localhost/mobile/record/',
                    data: $scope.rec
            }).then(
              function successCallback(rs){
                     console.log(rs.data)
                     //$scope.rec=rs.data.rec;
            
                 $state.go('list');
              
              
                    },
              function errorCallback(response){
                  
               
              });
}     
    

$scope.delete=function(){
    
    if(!confirm("Are you sure?"))return;
       
    
    $http({
                    method: 'DELETE',
                    url:'http://localhost/mobile/record/'+$scope.rec._id
            }).then(
              function successCallback(rs){
                     console.log(rs.data)
                     //$scope.rec=rs.data.rec;
            
                 $state.go('list');
              
              
                    },
              function errorCallback(response){
                  
               
              });
    
    
    
}


});