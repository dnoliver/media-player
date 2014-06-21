define([
  'ui/base/listcontroller',
  'ui/fileinput/collection',
  'ui/fileinput/view'
  
],function(ListController, FileCollection, FileInputView){
  var FileInput = new Class({
    
    Extends: ListController,
    
    attributes: {
      componentName: 'FileInput',
      collection: FileCollection,
      view: FileInputView
    },
    
    initialize: function(settings){
      this.parent(settings);
    }
  });
  
  return FileInput;
});