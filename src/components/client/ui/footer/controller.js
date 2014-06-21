define([
  'ui/base/controller',
  'ui/footer/model',
  'ui/footer/view'
],function(Controller, FooterModel, FooterView){
  var Footer = new Class({
    
    Extends: Controller,
    
    attributes: {
      componentName: 'Footer',
      model: FooterModel,
      view: FooterView
    },
    
    initialize: function(settings){
      this.parent(settings);
    }
    
  });
  
  return Footer;
});