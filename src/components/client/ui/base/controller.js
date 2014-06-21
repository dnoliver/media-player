define([
  'underscore',
  'commons/logger',
  'ui/base/model',
  'ui/base/view'
  
],function(_, Logger, Model, View){
  var Controller = new Class({
    
    Implements: Logger,
    
    attributes: {
      componentName: 'Controller',
      model: Model,
      view: View  
    },
    
    getDefaults: function(){
      var model = new this.attributes.model();
      var view = new this.attributes.view({model:model});
      
      return { model: model, view: view};
    },
    
    initialize: function(settings){
      
      _.defaults( this, settings, this.getDefaults() );
      this.log('Initialize');
    }
    
  });
  
  return Controller;
});