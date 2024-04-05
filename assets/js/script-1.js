fetch ("http://www.omdbapi.com/?apikey=f2ae7509&")
.then(function (response){console.log(response)})

fetch ("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=egypt&origin=*")
.then(function (response){console.log(response)})

$(document).ready(function() {
    // Initialize modal
    $('.ui.modal').modal();

    // Show modal when search button is clicked
    $('#searchBtn').click(function() {
      $('#myModal').modal('show');
    });

    // Hide modal when cancel button is clicked
    $('#cancelBtn').click(function() {
      $('#myModal').modal('hide');
    });

    // Handle search submit
    $('#searchSubmit').click(function() {
      const searchQuery = $('#searchInput').val();
      alert('Performing search for: ' + searchQuery);
      // Add your search logic here
      $('#myModal').modal('hide'); // Hide modal after search
    });
  });