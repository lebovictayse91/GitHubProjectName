const fs = require('fs');
fs.readFile('./yourfile.js', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
