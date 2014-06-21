define([
  'jquery',
  'backbone',
  'underscore',
  
  'ui/base/model'
],function($, Backbone, _, Model){
  
  var Collection = Backbone.Collection.extend({
    model: Model
  });
  
  return Collection;
});