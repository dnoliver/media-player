define([
  'ui/base/view',
  'text!ui/medialist/template.html',
  
],function(View, MediaListTemplate){
  
  var NavbarView = View.extend({
    
    initialize: function(){
      this.listenTo(this.collection, 'add', this.render);
    },
    
    template: _.template( MediaListTemplate ),
    
    render: function(){
      var json = this.collection.toJSON();
      this.$el.html( this.template({ collection: json }) );
      return this;
    }
  });
  
  return NavbarView;
});