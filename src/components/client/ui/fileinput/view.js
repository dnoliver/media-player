define([
  'ui/base/view'
],function(View){
  
  var FileInputView = View.extend({
    
    tagName: 'input',
    
    attributes: {
      type: 'file',
      multiple: true
    },
  
    events: {
      'change': 'onChange'
    },
      
    onChange: function(){
      var files = this.el.files; // this is a FileList
      
      for( var i = 0; i < files.length; i++ ){
        var file = files[i]; // this is a File
        
        this.collection.add({ 
          file: file
        });
      }
      
    }
    
  });
  
  return FileInputView;
});