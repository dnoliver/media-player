define([
  'backbone'
], function(Backbone){
  
  var ID3TagModel = Backbone.Model.extend({
    defaults: {
      album: '',
      albumartist: [],
      artist: [],
      disk: {},
      duration: 0,
      genre: [],
      picture: [],
      title: '',
      track: {},
      year: ''
    }
  });
  
  return ID3TagModel;
});