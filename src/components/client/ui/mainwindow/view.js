define([
  'ui/base/view',
  'text!ui/mainwindow/template.html',
  
  'css!normalize',
  'css!bootstrap-css',
  'css!ui/mainwindow/stylesheet.css',
  
  'bootstrap'
  
],function(View, MainWindowTemplate){
  
  var MainWindowView = View.extend({
    
    template: _.template( MainWindowTemplate ),
    
    render: function(){
      this.$el.html( this.template( this.model.toJSON() ));
      return this;
    }
  });
  
  return MainWindowView;
});