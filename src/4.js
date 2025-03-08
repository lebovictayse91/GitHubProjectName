const https = require('https');

https.get('https://api.github.com/users/your-username', (res) => {
  res.on('data', (chunk) => {
    console.log(JSON.parse(chunk).name);
  });
}).on('error', (e) => {
  console.error(e);
});
