// Script-1.js

// Function to handle search button click
function handleSearch() {
    // Show modal when search button is clicked
    $('#myModal').modal('show');
}

// Function to handle cancel button click
function handleCancel() {
    // Close modal when cancel button is clicked
    $('#myModal').modal('hide');
}

// Function to handle search submit
function handleSearchSubmit() {
    // Get the value of the search input
    var searchQuery = $('#searchInput').val();

    // If search query is not empty, redirect to index-2.html
    if (searchQuery.trim() !== "") {
        // Fetch data from Wikipedia
        fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=" + searchQuery + "&origin=*")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Extract page content from API response
                var pages = data.query.pages;
                var pageId = Object.keys(pages)[0]; // Get the first (and only) page ID
                var extract = pages[pageId].extract;

                // Redirect to index-2.html and pass the extracted data as query parameter
                window.location.href = "index-2.html?searchQuery=" + encodeURIComponent(searchQuery) + "&extract=" + encodeURIComponent(extract);
            })
            .catch(function(error) {
                console.log(error);
                alert("Failed to fetch data from Wikipedia.");
            });
    } else {
        // Handle empty search query if needed
        alert("Please enter a search query.");
    }
}

// Attach event listeners
$(document).ready(function() {
    $('#searchBtn').click(handleSearch);
    $('#cancelBtn').click(handleCancel);
    $('#searchSubmit').click(handleSearchSubmit);
});
