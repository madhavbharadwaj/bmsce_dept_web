$(function(){
  var front = $('.Front'),
      others = ['Left2', 'Left', 'Right', 'Right2'];
  
  $('.Carousel').on('click', '.Items', function() {
    var $this = $(this);
    
    $.each(others, function(i, cl) {
      if ($this.hasClass(cl)) {
        front.removeClass('Front').addClass(cl);
        front = $this;
        front.addClass('Front').removeClass(cl);
      }
    });
  });
});