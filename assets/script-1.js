fetch ("http://www.omdbapi.com/?apikey=f2ae7509&")
.then(function (response){console.log(response)})

fetch ("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=egypt&origin=*")
.then(function (response){console.log(response)})
