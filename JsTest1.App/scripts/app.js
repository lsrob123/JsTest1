/// <reference path="_reference.js" />

var app = angular.module("app", [])
    .service("simpleService", [
        function() {
            var self = this;

            self.add = function(a, b) {
                return a + b;
            };
        }
    ])
    .controller("simpleController", [
        "$scope", "simpleService", function($scope, simpleService) {
            var self = this;

            self.currentTime = new Date();
            self.numberA = 0;
            self.numberB = 0;
            self.numberC = 0;

            self.getCurrentTime = function() {
                self.currentTime = new Date();
            };

            self.add = function() {
                self.numberC = simpleService.add(parseInt(self.numberA), parseInt(self.numberB));
            };
        }
    ]);
;

