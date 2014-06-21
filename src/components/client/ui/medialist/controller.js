define([
  'ui/base/listcontroller',
  'ui/medialist/collection',
  'ui/medialist/view'
  
],function(ListController, MediaListCollection, MediaListView){
  var MediaList = new Class({
    
    Extends: ListController,
    
    attributes: {
      componentName: 'MediaList',
      collection: MediaListCollection,
      view: MediaListView
    },
    
    initialize: function(settings){
      this.parent(settings);
    }
  });
  
  return MediaList;
});