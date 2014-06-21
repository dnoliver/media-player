define([
  'jquery',
  'jplayer',
  'ui/base/view',
  'text!ui/mediaplayer/template.html',
  'css!bower_components/jplayer/skin/blue.monday/jplayer.blue.monday.css'
  
],function($, jPlayer, View, MediaPlayerTemplate){
  
  var MediaPlayerView = View.extend({
    
    template: _.template( MediaPlayerTemplate ),
    
    render: function(){      
      this.$el.html( this.template( this.model.toJSON() ));    
      return this;
    },
    
    start: function(){  
      var $player = this.$("#jquery_jplayer_1");
      $( $player ).jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Bubble",
            m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
          });
        },
        swfPath: "../../bower_components/jplayer/jquery.jplayer/",
        supplied: "m4a, oga"
      });
      
      return this;
    }
    
  });
  
  return MediaPlayerView;
});