// Script-2.js

// Function to parse URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to display movie information
function displayMovieInfo() {
    // Get movie information from URL parameters
    const title = getUrlParameter('title');
    const plot = getUrlParameter('plot');
    const posterUrl = getUrlParameter('posterUrl');
    const extract = getUrlParameter('extract');

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
