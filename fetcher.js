const fetchURL = require('./fetchUrl');

const arguments = process.argv.slice(2, process.argv.length);

/*
  If we have both aruments, then we can procees with connection
*/
if (arguments.length == 2) {
  const url = arguments[0];
  const localPath = arguments[1];
  fetchURL(url, localPath);
} else {
  console.log("No arguments were provided or only one argument is provided");
}