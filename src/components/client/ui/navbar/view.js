define([
  'ui/base/view',
  'text!ui/navbar/template.html',
  
],function(View, NavbarTemplate){
  
  var NavbarView = Backbone.View.extend({
    
    template: _.template( NavbarTemplate ),
    
    render: function(){
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    }
  });
  
  return NavbarView;
});