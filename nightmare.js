// require the nightmare library
var Nightmare = require('nightmare');

// create a new browser window
var nightmare = Nightmare({ show: true });

nightmare
    .goto('http://159.203.244.183:3000/')
    .wait('p')

    // evaluate code IN THE NIGHTMARE BROWSER
    .evaluate(function () {

        // pass data from the nightmare browser back to this express app
        return document.querySelector('p').innerHTML;
    })

    // close the browser window
    .end()
    // the result passed into this function is the value we returned from evaluate
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });