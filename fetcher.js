const fs = require('fs')
const request = require('request');
// take in URL as command line arg 

const CMurl = process.argv.slice(2);
console.log(CMurl);
let url = CMurl[0];
let path = CMurl[1].toString();
console.log(url);
console.log(path);

request(url, (error, response, body) => {
  if(error) {
    console.log('error:', error);
  }
  if (response.statusCode !== 200) {
    console.log('statusCode:', response && response.statusCode);
  }
  fs.writeFile(path, body, () => {
    const size = body.length;
    console.log(`Downloaded and saved ${size} bytes to ${path}`);
  }); 
  
});  



// request(url)

// const fetcher = function(argsUrl, localFilePath) {

  // const url = args.slice(2);


// * GET to download

// * save to localFilePath
