  //hide all tabs first
$('.tab-content').hide();
//show the first tab content
$('#tab-1').show();


$('#select-box').change(function () {
   dropdown = $('#select-box').val();
  //first hide all tabs again when a new option is selected
  $('.tab-content').hide();
  //then show the tab content of whatever option value was selected
  $('#' + "tab-" + dropdown).show();                                    
});




