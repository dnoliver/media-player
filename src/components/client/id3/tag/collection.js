define([
  'backbone',
  'id3/tag/model'
  
],function(Backbone, ID3TagModel){
  
  var ID3TagCollection = Backbone.Collection.extend({
    model: ID3TagModel
  });
  
  return ID3TagCollection;
});