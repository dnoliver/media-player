define([
  'jquery',
  'jplayer',
  'ui/base/controller',
  'ui/mediaplayer/model',
  'ui/mediaplayer/view',
],function($, jPlayer, Controller, MediaPlayerModel, MediaPlayerView){
  var MediaPlayer = new Class({
    
    Extends: Controller,
    
    attributes: {
      componentName: 'Media Player',
      model: MediaPlayerModel,
      view: MediaPlayerView
    },
    
    initialize: function(settings){
      this.parent(settings);
    },
    
    setDefaultSong: function(){
      
    }
    
  });
  
  return MediaPlayer;
});