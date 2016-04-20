"use strict";function MainCtrl(t,o,e){console.log("MainCtrl");var r=this;e.getProjects().then(function(t){r.projects=t})}function AboutCtrl(){console.log("AboutCtrl");var t=this;t.myInterval=3e3}function PostCtrl(t,o,e,r){console.log("PostCtrl");var l=this;l.getDivs=function(t){return new Array(t)},r.setCurrentPost(o.post),e(function(){l.getcurrentPostName=r.getcurrentPostName(),l.getCurrentPost=r.getCurrentPost()},1)}function ContactCtrl(t,o,e,r){console.log("Contact Ctrl");var l,n=this,a=r("xs");n.contactInfo={},n.sendEmail=function(){n.showToast()},n.showToast=function(){l=a?"top right":"bottom left",e.show({hideDelay:5e3,position:l,controller:"ContactCtrl",templateUrl:"/components/toast.html"}).then(function(){o.go("home.projects")})}}function PostsCtrl(t,o,e){console.log("PostsCtrl");var r=this;e.getPosts().then(function(t){r.posts=t})}function ProjectCtrl(t,o,e,r,l,n,a){console.log("ProjectCtrl");var s=this;s.myInterval=3e3,s.showAdvanced=function(o){var e=(a("sm")||a("xs"))&&s.customFullscreen;n.show({controller:ProjectCtrl,templateUrl:"/components/gallery-dialog.html",parent:angular.element(document.body),targetEvent:o,ariaLabel:"Project Photo Gallery",clickOutsideToClose:!0,fullscreen:e,openFrom:"#left",closeTo:angular.element(document.querySelector("#right"))}),t.$watch(function(){return a("xs")||a("sm")},function(t){s.customFullscreen=t===!0})},s.slides=[{image:"http://fillmurray.com/g/1200/300"},{image:"http://fillmurray.com/g/1200/300"},{image:"http://fillmurray.com/g/1200/300"},{image:"http://fillmurray.com/g/1200/300"}],s.getDivs=function(t){return new Array(t)},document.addEventListener("DOMContentLoaded",function(){document.querySelector("main").className+="loaded"}),l.setCurrentProject(e.project),r(function(){s.getCurrentProject=l.getCurrentProject(),s.getCurrentProjectByName=l.getCurrentProjectName()},1)}angular.module("alpha",["ui.router","ui.bootstrap","ngAnimate","ngMaterial","ngMessages"]).run(function(){console.log("App Ready :)")}).config(["$stateProvider","$urlRouterProvider","$mdThemingProvider",function(t,o,e){o.otherwise("/"),t.state("home",{url:"","abstract":!0}).state("home.projects",{url:"/",views:{"content@":{templateUrl:"partials/portfolio.html",controller:"MainCtrl",controllerAs:"Main"}}}).state("home.projects.project",{url:"projects/:project",views:{"content@":{templateUrl:"components/portfolio-card.html",controller:"ProjectCtrl",controllerAs:"Project"}}}).state("posts",{url:"/posts",views:{"content@":{templateUrl:"partials/post.html",controller:"PostsCtrl",controllerAs:"Posts"}}}).state("posts.post",{url:"/:post",views:{"content@":{templateUrl:"components/post-card.html",controller:"PostCtrl",controllerAs:"Post"}}}).state("about",{url:"/about",views:{"content@":{templateUrl:"partials/about.html",controller:"AboutCtrl",controllerAs:"About"}}}).state("contact",{url:"/contact",views:{"content@":{templateUrl:"partials/contact.html",controller:"ContactCtrl",controllerAs:"Contact"}}}),e.theme("default").primaryPalette("blue-grey").accentPalette("grey").backgroundPalette("blue-grey")}]),MainCtrl.$inject=["$scope","$stateParams","projectsService"],angular.module("alpha").controller("MainCtrl",MainCtrl),angular.module("alpha").controller("AboutCtrl",AboutCtrl),PostCtrl.$inject=["$scope","$stateParams","$timeout","postsService"],angular.module("alpha").controller("PostCtrl",PostCtrl),ContactCtrl.$inject=["$scope","$state","$mdToast","$mdMedia"],angular.module("alpha").controller("ContactCtrl",ContactCtrl),PostsCtrl.$inject=["$scope","$rootScope","postsService"],angular.module("alpha").controller("PostsCtrl",PostsCtrl),ProjectCtrl.$inject=["$scope","$rootScope","$stateParams","$timeout","projectsService","$mdDialog","$mdMedia"],angular.module("alpha").controller("ProjectCtrl",ProjectCtrl);