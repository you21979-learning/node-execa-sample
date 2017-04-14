const execa = require('execa');
 
execa('echo', ['unicorns']).then(result => {
    console.log(result.stdout);
}).catch(e => {
    console.log(e);
});
