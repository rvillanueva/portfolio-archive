'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('ProjectCtrl', function ($location,$routeParams, $sce, projectFactory) {
    this.p = projectFactory.getById($routeParams.projectId);
    this.projects = projectFactory.all();
    this.loaded = false;
    if(!this.p){
      $location.path('/');
    }
    this.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    this.runLoad = function(){
      setTimeout(function(){
        $('.project-carousel').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true
        });
      }, 500);

    }

    this.runLoad();


  });
