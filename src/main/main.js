var require = {
  baseUrl: '../../',
  
  map: {
    '*': {
      'css': 'bower_components/require-css/css',
      'normalize': 'bower_components/normalize-css/normalize.css',
      'bootstrap-css': 'bower_components/bootstrap/dist/css/bootstrap.min.css',
      
      'text': 'bower_components/requirejs-text/text'
    }
  },
  
  paths: {
    mootools: 'bower_components/mootools/mootools-all',
    jquery: 'bower_components/jquery/dist/jquery.min',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
    backbone: 'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    jplayer: 'bower_components/jplayer/jquery.jplayer/jquery.jplayer',
    musicmetadata: "bower_components/musicmetadata/dist/musicmetadata",
    q: "bower_components/q/q",
    
    core: 'src/components/client/core',
    ui: 'src/components/client/ui',
    commons: 'src/components/client/commons',
    id3: 'src/components/client/id3',
    media: 'src/components/client/media'
  },
  
  shim: {
    backbone: {
      deps: ['underscore']
    },
    
    jplayer: {
      deps: ['jquery']
    },
    
    bootstrap: {
      deps: ['jquery']
    }
  },
  
  deps: ['mootools','underscore'],
  callback: function() {
    require(['core/application'],function(Application){
      App = new Application();
    });
  }
}