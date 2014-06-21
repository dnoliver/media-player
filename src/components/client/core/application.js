define([
  "commons/logger",
  "ui/base/factory",
  "id3/parser"
  
],function(Logger, UiFactory, ID3Parser ){
  var Application = new Class({
    
    Implements: Logger,
    
    attributes: {
      componentName: 'Application'  
    },
    
    initialize: function(options){      
      this.factory = new UiFactory();
      
      this.log('Initialize');
      
      this.window = this.factory.create('MainWindow');
      this.navbar = this.factory.create('Navbar');
      this.footer = this.factory.create('Footer');
      
      this.fileinput = this.factory.create('FileInput');
      this.medialist = this.factory.create('MediaList');
      this.mediaplayer = this.factory.create('MediaPlayer');
      
      this.parser = new ID3Parser();
      
      this.start();
      
    },
    
    start: function(){
      
      this.log('Start');
      this.window.view.setElement('body');
      this.window.view.render();
      
      this.navbar.view.setElement( this.window.view.$('#navbar') );
      this.navbar.view.render();
      
      this.footer.view.render();
      this.window.view.$('#footer').append( this.footer.view.el );
      
      this.fileinput.view.render();
      this.window.view.$('#content').append( this.fileinput.view.el );
      
      this.medialist.view.render();
      this.window.view.$('#content').append( this.medialist.view.el );
      
      this.mediaplayer.view.render();
      this.window.view.$('#content').append( this.mediaplayer.view.el );
      this.mediaplayer.view.start();
      
      var self = this;
      
      this.fileinput.collection.on('add', function(model, collection, options){
        
        var file = model.get('file');
        self.parser.parse( file )
        .then(function(id3tag){
            self.medialist.collection.add({ id3tag: id3tag, file: file });
        })
        .fail(function(err){ 
          self.error(err); 
        });
      });
    }
  });
  
  return Application;
});