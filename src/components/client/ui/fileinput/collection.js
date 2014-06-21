define([
  'backbone',
  'ui/fileinput/model'
],function(Backbone, FileModel){
  
  var FileCollection = Backbone.Collection.extend({
    model: FileModel
  });
  
  return FileCollection;
});