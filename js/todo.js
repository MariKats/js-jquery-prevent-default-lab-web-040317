$(document).ready(function(){
  submitForm()
});

+function submitForm () {
 +$('form').on('submit', function(e){
 +  var item = $('#item').val();
 +  $('ol').append( '<li>' + item + '</li>' )
 +  e.preventDefault()})
 +}
