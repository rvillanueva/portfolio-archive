'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('MainCtrl', function ($location, projectFactory) {
    this.selectedSkillType = '!!';
    this.filterSkills = function(type){
      if(type !== this.selectedSkillType){
        this.selectedSkillType = type;
      } else {
        this.selectedSkillType = '!!';
      }
    };
    this.navigate = function(path){
      if(path){
        $location.path(path);
      }
    };
    this.skills = [
      {
        name: 'Angular 1',
        type: 'frontend',
        primary: true
      },
      {
        name: 'Node.js',
        type: 'backend',
        primary: true
      },
      {
        name: 'Express',
        type: 'backend',
        primary: true
      },
      {
        name: 'MongoDB',
        type: 'backend',
        primary: true
      },
      {
        name: 'Ionic',
        type: 'frontend'
      },
      {
        name: 'ECMA 6',
        type: 'backend'
      },
      {
        name: 'Typescript',
        type: 'frontend'
      },
      {
        name: 'SASS',
        type: 'frontend'
      },
      {
        name: 'Bower',
        type: 'devops'
      },
      {
        name: 'Grunt',
        type: 'devops'
      },
      {
        name: 'OAuth 2.0',
        type: 'backend'
      },
      {
        name: 'Gulp',
        type: 'devops'
      },
      {
        name: 'REST API',
        type: 'backend'
      },
      {
        name: 'AWS',
        type: 'devops'
      },
      {
        name: 'D3',
        type: 'frontend'
      },
      {
        name: 'Heroku',
        type: 'devops'
      },
      {
        name: 'Git',
        type: 'devops'
      },
      {
        name: 'Webpack',
        type: 'devops'
      },
      {
        name: 'Photoshop',
        type: 'design'
      }
    ];

    this.projects = projectFactory.all();

    this.skillCategories = [
    {
      name: 'Design',
      value: 'design'
    },
    {
      name: 'Frontend',
      value: 'frontend'
    },
    {
      name: 'Backend',
      value: 'backend'
    },
    {
      name: 'DevOps',
      value: 'devops'
    }
  ];
  });
