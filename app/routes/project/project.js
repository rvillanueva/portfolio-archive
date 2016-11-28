'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('ProjectCtrl', function ($timeout, $location,$routeParams, projectFactory) {
    this.p = projectFactory.getById($routeParams.projectId);
    this.projects = projectFactory.all();
    this.loaded = false;
    if(!this.p){
      $location.path('/')
    }
    $timeout(() => {
      this.loaded = true;
      $('.project-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
      console.log(this.loaded);
    }, 500)

  });
