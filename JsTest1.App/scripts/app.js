/// <reference path="_reference.js" />
'use strict';
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

            self.numberA = 0;
            self.numberB = 0;
            self.numberC = 0;

            self.hero = {
                name: 'Spawn'
            };
            self.something = new Date();
            self.myTime = new Date();

            self.getCurrentTime = function() {
                self.myTime = new Date();
                self.something = new Date();
            };

            self.add = function() {
                self.numberC = simpleService.add(parseInt(self.numberA), parseInt(self.numberB));
            };
        }
    ]);
;

