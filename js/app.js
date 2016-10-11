$(document).ready( function(){
  $('#btn-go').click(function(){
    var category = $('.category').val();
    // var rating =
    var title = $('#movie-title').val();

    $.getJSON( "http://www.omdbapi.com/?t=" + title + "&r=json&tomatoes", function( data ) {
      console.log(data);
    });



  });
  $('.category').SumoSelect();
  $('#movie-title').SumoSelect();
});
