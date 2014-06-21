define([
  'ui/base/controller',
  'ui/mainwindow/model',
  'ui/mainwindow/view'
  
],function(Controller, MainWindowModel, MainWindowView){
  var MainWindow = new Class({
    
    Extends: Controller,
    
    attributes: {
      componentName: 'MainWindow',
      model: MainWindowModel,
      view: MainWindowView
    },
    
    initialize: function(settings){
      this.parent(settings);
    }
  });
  
  return MainWindow;
});