$(document).ready(function () {
  $('.sidebar-nav li a').click(function(e) {

      $('.sidebar-nav li.active').removeClass('active');

      var $parent = $(this).parent();
      $parent.addClass('active');
      e.preventDefault();
  });

});
