'use strict';

/**
 * @ngdoc service
 * @name ryanApp.project
 * @description
 * # project
 * Factory in the ryanApp.
 */
angular.module('ryanApp')
  .factory('projectFactory', function () {
    // Service logic
    // ...
    var projects = [{
      id: 'compass',
      name: 'Compass',
      type: 'Global tool for managing client visits to IBM Research innovation labs.',
      imageUrl: 'images/projects/compass/1.png',
      description: 'The Compass was originally developed as a standalone catalog of IBM Research projects. Over time, it expanded to become the central platform for managing client visits to the flagship innovation lab. Over two years it processed over 400 clients.',
      roleDescription: 'I started this project as a way to distribute information about IBM Research projects around the world. As we continued operations in our innovation lab, we began to receive a much higher volume of visit requests and needed to process them systematically.\n\nAs tool lead, I regularly worked with our team and other internal stakeholders to map out requirements, develop features, and deploy them for use.',
      carousel: [{
        url: 'images/projects/compass/1.png'
      },
      {
        url: 'images/projects/compass/2.png'
      },
      {
        url: 'images/projects/compass/3.png'
      },
      {
        url: 'images/projects/compass/4.png'
      }]
    },{
      id: 'resupply',
      name: 'Emergency Medical Resupply',
      type: 'Early warning system for stocked out Liberian hospitals.',
      imageUrl: 'images/projects/resupply/1.png',
      description: 'The Red Dot Delivery platform is an inventory management system for critical medical supplies in Liberia. Collaborating with Partners In Health, Red Dot deployed a pilot system in key medical facilities that provided early warning of shortages.',
      roleDescription: 'I developed the front end of the early demonstration for Partners in Health. First, I worked with the Partners in Health operations team to map out existing inventory management systems and user fees. Then, in conjunction with the project leadership and subject matter experts, I outlined the reporting and analytics interfaces. Finally, I developed the frontend dashboards for the initial pilot with a backend infrastructure ready to integrate  the additional server-side logic. This system provided the core for the production system that was deployed.',
      carousel: [{
        url: 'images/projects/resupply/1.png'
      },
      {
        url: 'images/projects/resupply/2.png'
      },
      {
        url: 'images/projects/resupply/3.png'
      },
      {
        url: 'images/projects/resupply/4.png'
      },
      {
        url: 'images/projects/resupply/5.png'
      }]
    },{
      id: 'retail',
      name: 'See Your Dreams',
      type: 'Video demonstrating retail applications of computer vision.',
      description: 'IBM sought to demonstrate its computer vision companies using compelling and creative materials. From an initial problem statement, I storyboarded and created a marketing video for client. It was received very well by the client and led to additional conversations about IBM technologies.',
      imageUrl: 'images/projects/retail/1.png',
      imagePosition: 'center top',
      videoUrl: 'https://player.vimeo.com/video/97888208'
    },{
      id: 'florence',
      name: 'Florence.ai',
      type: 'Improving treatment adherence using conversational A.I.',
      imageUrl: 'images/projects/florence/1.png',
      description: 'Florence is a conversational A.I. platform that manages patient adherence. Set goals for your patients, like "Exercise thirty minutes a day" or "Take your medication twice daily". Florence dynamically understands these goals and regularly checks in with your patients to track their progress. When they deviate from their goals, Florence works with them to understand why and report back any barriers they may encounter.',
      roleDescription: 'During the development process, conducted user research with key stakeholders such as care providers, patients, and administrators. Developed several functional prototypes using SMS and Facebook Messenger. Tested both the texting interactions and analytics dashboards with care providers.',
      carousel: [{
        url: 'images/projects/florence/1.png'
      }]
    },{
      id: 'geosourcer',
      name: 'Geosourcer',
      type: 'Crowdsourced geospatial analysis for NGA hackathon.',
      imageUrl: 'images/projects/geosourcer/1.png',
      description: 'Geosourcer was a hackathon project to create a platform for crowdsourcing geospatial image tagging. By distributing analysis across a large population, organizations can receive labeled data much faster than from a small handful of analysts. This project was created for the National Geospatial Intelligence Agency Expedition hackathon.',
      carousel: [{
        url: 'images/projects/geosourcer/1.png'
      },
      {
        url: 'images/projects/geosourcer/2.png'
      },
      {
        url: 'images/projects/geosourcer/3.png'
      },
      {
        url: 'images/projects/geosourcer/4.png'
      },
      {
        url: 'images/projects/geosourcer/5.png'
      }]
    },{
      id: 'community',
      name: 'Community Analytics',
      type: 'Local intelligence for restaurant franchises.',
      imageUrl: 'images/projects/community/1.png',
      imagePosition: 'center top',
      description: 'This social dashboard was an overnight prototype to demonstrate how IBM Research social analytics could help restaurant franchise owners to understand their local community. The early demo integrated the Yelp API to compare reviews against local franchises, while later iterations integrated Twitter and social event data.',
      roleDescription: 'During a two day workshop with a the innovation team at a global restaurant franchise, I took one of the suggestions created on the first day and created a functional prototype overnight. The client expressed that they were incredibly impressed the next day, and the prototype was later cited as a reason for continued engagement.',
      carousel: [{
        url: 'images/projects/community/1.png'
      },
      {
        url: 'images/projects/community/2.png'
      },
      {
        url: 'images/projects/community/3.png'
      }]
    },
    {
      id: 'weaver',
      name: 'Weaver',
      type: 'Cognitive application for real-time news analysis using IBM Watson services.',
      description: 'Created for an IBM challenge to integate Watson services. Weaver pulls scraped news articles and analyzes the natural language. It then structures the analysis into human readable format, including timeline and entity relationship graphs.',
      imageUrl: 'images/projects/weaver/1.png',
      imagePosition: 'center top',
      carousel: [{
        url: 'images/projects/weaver/1.png'
      },
      {
        url: 'images/projects/weaver/2.png'
      },
      {
        url: 'images/projects/weaver/3.png'
      },
      {
        url: 'images/projects/weaver/4.png'
      },
      {
        url: 'images/projects/weaver/5.png'
      }]

    }]

    // Public API here
    return {
      all: function () {
        return projects;
      },
      getById(id){
        var returned = false;
        angular.forEach(projects, function(project, p){
          if(id == project.id){
            returned = project;
          }
        })
        return returned;
      }
    };
  });
