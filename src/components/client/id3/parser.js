define([
  'underscore',
  'musicmetadata',
  'q',
  'commons/logger',
  'id3/tag/collection'
  
], function(_, musicmetadata, Q, Logger, ID3TagCollection){
  var Parser = new Class({
    
    Implements: Logger,
    
    attributes: {
      componentName: 'Parser'  
    },
    
    initialize: function(settings){      
      
      this.collection = new ID3TagCollection();
      this.log('Initialize');
    },
    
    parse: function( files ){
      this.log('parsing');
      
      var deferred = Q.defer();
      
      if( files instanceof FileList ){
        this.collection.reset();
        this.parseFiles(files)
        .then(function(){ deferred.resolve() })
        .fail(function(){ deferrer.reject() });
      }
      else if( files instanceof File ) {
        this.collection.reset();
        this.parseFile(files)
        .then(function(id3tag){ deferred.resolve(id3tag) })
        .fail(function(){ deferrer.reject() });
      }
      else {
        deferred.reject();
      }
      
      return deferred.promise;
    },
    
    parseFiles : function(files){
      var deferred = Q.defer();
      var self = this;
      var readed = 0;
      
      if( files instanceof FileList ){
        
        for(var i = 0; i < files.length; i++ ) {
          this.parseFile(files[i])
          .then(function(id3tag){
            self.collection.add(id3tag);
            
            if( ++readed == files.length ) {
              deferred.resolve();
            }
            
          })
          .fail(function(err){
            deferred.reject(err);
          });
        }
      }
      else {
        deferred.reject();
      }
      
      return deferred.promise;
    },
    
    parseFile: function(file){
      var deferred = Q.defer();
      var self = this;
      
      if(file instanceof File) {
        var parser = musicmetadata(file);

        parser.on('metadata',function(result){
          deferred.resolve(result);  
        });

        parser.on('done',function(err){
          if(err) {
            deferred.reject(err);
          }
        });
      }
      else {
        deferred.reject();
      }
      
      return deferred.promise;
    } 
  });
  
  return Parser;
});