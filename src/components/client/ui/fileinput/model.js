define([
  'ui/base/model'
],function(Model){
  
  var FileModel = Model.extend({
    defaults: {
      file: {}
    }
  });
  
  return FileModel;
});