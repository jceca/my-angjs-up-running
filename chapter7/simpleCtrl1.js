/**
 * Created by Javier on 04/02/2015.
 */

angular.module('notesApp', [])
    .controller('SimpleCtrl', ['$location', function($location){
        var self = this;
        self.navigate = function () {
            $location.path('/some/where/else');
        };
    }]);

