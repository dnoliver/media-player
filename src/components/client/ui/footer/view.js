define([
  'ui/base/view'
],function(View){
  
  var FooterView = View.extend({
    
    tagName: 'footer',
    
    attributes: {
      class: 'well',
      style: 'margin-bottom:0',
    }
    
  });
  
  return FooterView;
});