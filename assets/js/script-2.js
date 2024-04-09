// Script-2.js

// Function to parse URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to display search results
function displaySearchResults() {
    // Get search query and extract from URL parameters
    var searchQuery = getUrlParameter('searchQuery');
    var extract = getUrlParameter('extract');

    // Get elements by their IDs
    var searchQueryElement = document.getElementById('searchQuery');
    var extractElement = document.getElementById('extract');

    // Check if search query or extract is empty
    if (!searchQuery || !extract) {
        alert("Search result is undefined or null.");
        return; // Exit the function early
    }

    // Check if elements exist before setting their innerText
    if (searchQueryElement && extractElement) {
        // Display search query and extract on the page
        searchQueryElement.innerText = "Search Query: " + searchQuery;
        extractElement.innerText = "Extract: " + extract;
    } else {
        console.error("One or more elements not found.");
    }
}

// Call displaySearchResults when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    displaySearchResults();
});
