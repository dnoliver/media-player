define([
  'ui/base/controller',
  'ui/navbar/model',
  'ui/navbar/view'
],function(Controller, NavbarModel, NavbarView){
  var Navbar = new Class({
    
    Extends: Controller,
    
    attributes: {
      componentName: 'Navbar',
      model: NavbarModel,
      view: NavbarView
    },
    
    initialize: function(settings){
      this.parent(settings);
    }
  });
  
  return Navbar;
});