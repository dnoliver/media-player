define([
  'underscore',
  'commons/logger',
  'ui/base/view',
  'ui/base/collection'
  
],function(_, Logger, View, Collection) {
  
  var CollectionController = new Class({
    
    Implements: Logger,
    
    attributes: {
      componentName: 'Collection Controller',
      view: View,
      collection: Collection
    },
    
    getDefaults: function(){
      var collection = new this.attributes.collection();
      var view = new this.attributes.view({ collection:collection });
      
      return { collection: collection, view: view};
    },
    
    initialize: function(settings){
      _.defaults( this, settings, this.getDefaults() );
      this.log('Initialize');
    }
    
  });
  
  return CollectionController;
});