define([
  'underscore'
], function(_){
  
  var Logger = new Class({
    
    attributes: {
      componentName: 'Logger'
    },
    
    log: function(){
      var args = [this.attributes.componentName].append(arguments);
      console.log.apply(console, args);
    }, 
    
    error: function(){
      var args = [this.attributes.componentName].append(arguments);
      console.error.apply(console, args);
    }
    
  });
  
  return Logger;
});