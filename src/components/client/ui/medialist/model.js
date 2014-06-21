define([
  'ui/base/model'
],function(Model){
  
  var MediaModel = Model.extend({
    defaults: {
      
    },
    
    initialize: function(){
      var file = this.get('file');
      var url = URL.createObjectURL(file);
      
      this.set({ url: url });
    }
  });
  
  return MediaModel;
});