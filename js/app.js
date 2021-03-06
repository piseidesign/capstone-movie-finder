$(document).ready(function() {
  $('#btn-go').click(function() {
    var searchTitle = $('#movie-title').val();
    if (searchTitle.length) {
      getRequest(searchTitle);
    }
  });
});
// functions
function getRequest(searchTitle) {
  var params = {
    q: searchTitle,
    r: 'json'
  };
  url = "https://www.omdbapi.com/?t=" + searchTitle + "&r=json&tomatoes";

  $.getJSON(url, params, function(data) {
    showResults(data);
  });
}

function showResults(results) {
  // console.log(results.Response);
  if (results.Response == "False") {
    $('#search-results').html("<h3 class='text-center text-placeholder'>" + results.Error + "</h3>");
  } else {
    var html = "";
    html += '<div class="media"><div class="media-left"><img class="media-object img-thumbnail" src="' + results.Poster + '" alt="..."></div><div class="media-body"><h4 class="media-heading">' + results.Title + '</h4><ul class="list-inline"><li><strong>IMDb:</strong> ' + results.imdbRating + ' /10</span></li><li>' + results.Year + '</li><li>' + results.Rated + '</li><li>' + results.Runtime + '</li></ul><p>' + results.Genre + '</p><p>' + results.Plot + '</p><p>' + results.Actors + '</p></div></div>';
  }
  $('#search-results').html(html);
}
