// require the nightmare library
var Nightmare = require('nightmare');
var fs = require('fs');

// create a new browser window
var nightmare = Nightmare({ show: true });

nightmare
    .goto('http://159.203.244.183:3000/')
    .wait('body')

    // evaluate code IN THE NIGHTMARE BROWSER
    .evaluate(function () {

        // pass data from the nightmare browser back to this express app
        var bodyHTML =  document.querySelector('body').innerHTML;
        bodyHTML = bodyHTML.split('</script>')[1].toString().replace(/<sp&#97;n>|<\/sp&#97;n>|<\/span>|<\/main>|<\/div>/g, '').trim();
        return bodyHTML;


    })

    // close the browser window
    .end()
    // the result passed into this function is the value we returned from evaluate
    .then(function (result) {
        //fs.writeFileSync('results.txt', result);
        console.log(result, '\n\nSCREW YOU ASSHOLES. YOU JUST BEEN SCRAPED.');
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });