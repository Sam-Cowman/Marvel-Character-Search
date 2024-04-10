// Script-1.js

// Wait for the document to be fully loaded
$(document).ready(function() {
  // Function to handle search submit
  function handleSearchSubmit() {
      // Get the value of the search input
      var searchQuery = $('#searchInput').val();

      // If search query is not empty, fetch data from OMDB API
      if (searchQuery.trim() !== "") {
          // Fetch movie information from OMDB API
          fetch("https://www.omdbapi.com/?apikey=f2ae7509&t=" + searchQuery)
              .then(function(response) {
                  if (!response.ok) {
                      throw new Error("Failed to fetch movie data from OMDB API.");
                  }
                  return response.json();
              })
              .then(function(data) {
                  if (data.Response === "False") {
                      throw new Error(data.Error);
                  }

                  // Extract movie title, plot, and poster URL from the OMDB API response
                  var title = data.Title;
                  var plot = data.Plot;
                  var posterUrl = data.Poster;

                  // If movie title and plot are not empty, fetch introduction from Wikipedia API
                  if (title && plot) {
                      fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=" + title + "&origin=*")
                          .then(function(response) {
                              if (!response.ok) {
                                  throw new Error("Failed to fetch introduction from Wikipedia API.");
                              }
                              return response.json();
                          })
                          .then(function(data) {
                              // Extract page content from Wikipedia API response
                              var pages = data.query.pages;
                              var pageId = Object.keys(pages)[0]; // Get the first (and only) page ID
                              var extract = pages[pageId].extract;

                              // Redirect to index-2.html and pass the movie information and extracted introduction as query parameters
                              window.location.href = "index-2.html?title=" + encodeURIComponent(title) + "&plot=" + encodeURIComponent(plot) + "&posterUrl=" + encodeURIComponent(posterUrl) + "&extract=" + encodeURIComponent(extract);
                          })
                          .catch(function(error) {
                              console.error(error);
                              alert(error.message);
                          });
                  } else {
                      // Handle empty movie title or plot if needed
                      throw new Error("Failed to fetch movie information.");
                  }
              })
              .catch(function(error) {
                  console.error(error);
                  alert(error.message);
              });
      } else {
          // Handle empty search query if needed
          alert("Please enter a search query.");
      }
  }

  // Show modal when search button is clicked
  $('#searchBtn').click(function() {
      $('#myModal').modal('show');
  });

  // Close modal when cancel button is clicked
  $('#cancelBtn').click(function() {
      $('#myModal').modal('hide');
  });

  // Redirect to index-2.html when search button on modal is clicked
  $('#searchSubmit').click(handleSearchSubmit);
});
