define([
  'commons/logger',
  
  "ui/mainwindow/controller",
  "ui/navbar/controller",
  "ui/footer/controller",
  "ui/fileinput/controller",
  "ui/medialist/controller",
  "ui/mediaplayer/controller"
  
],function(Logger, MainWindow, Navbar, Footer, FileInput, MediaList, MediaPlayer ){
  var Factory = new Class({
    
    Implements: Logger,
    
    attributes: {
      componentName: 'UI Factory'  
    },
    
    initialize: function(settings){
      _.defaults( this, settings, this.attributes );
      this.log('Initialize');
      
      this.components = {
        'MainWindow': MainWindow,
        'Navbar': Navbar,
        'Footer': Footer,
        'FileInput': FileInput,
        'MediaList': MediaList,
        'MediaPlayer': MediaPlayer
      };
    },
    
    create: function(componentName, componentSettings){
      if( !this.components[componentName] ) {
        this.error(componentName, 'is not defined');
        throw new Error();
        return null;
      }
      
      return new this.components[componentName](componentSettings);
    }
  });
  
  return Factory;
});