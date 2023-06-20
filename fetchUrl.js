const request = require('request');
const fs = require('fs');

/*
  Function that attempts to connect to URL and, 
  if successful, writes the content to file

  If failed, outputs the error to the console
*/
const fetchURL = (url, localPath) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    }
    if (body) {
      writeBodyToFile(body, localPath);
    }
  });
}

/*
  Asynchronous function to write to the file
  accepts
    content - content that is needed to be written to file
    local path - name of the file to write into
*/
async function writeBodyToFile(content, localPath) {
  try {
    await fs.writeFile(localPath, content, function(err) {
      if (err) {
        console.log('error', err);
      } else {
        console.log(`Downloaded and saved ${getFilesizeInBytes(localPath)} bytes to ${localPath}`);
      }
    });
  } catch (err) {
    console.log('Something went wrong');
    console.log(err);
  }
}

/*
  Finds the size of given document
*/
function getFilesizeInBytes(filename) {
  var stats = fs.statSync(filename);
  var fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

module.exports = fetchURL;