// Script-2.js

// Function to parse URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to display movie information
function displayMovieInfo() {
    // Get movie information from URL parameters
    var title = getUrlParameter('title');
    var plot = getUrlParameter('plot');
    var posterUrl = getUrlParameter('posterUrl');
    var extract = getUrlParameter('extract');

    // Display movie title, plot, and poster on the page
    document.getElementById('title').innerText = title;
    document.getElementById('plot').innerText = plot;
    document.getElementById('poster').src = posterUrl;
    
    // Display extracted introduction about the movie
    document.getElementById('extract').innerText = "Introduction: " + extract;
}

// Call displayMovieInfo when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayMovieInfo();
});
