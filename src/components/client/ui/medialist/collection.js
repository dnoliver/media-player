define([
  'backbone',
  'ui/medialist/model'
],function(Backbone, MediaModel){
  
  var MediaListCollection = Backbone.Collection.extend({
    model: MediaModel
  });
  
  return MediaListCollection;
});