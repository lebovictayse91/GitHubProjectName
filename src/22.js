let express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Welcome to GitHubProjectName</h1>
        <p>This is a sample Node.js code for the GitHub Project. Feel free to use it.</p>
        <a href="/user">More Info about the User</a>
        <form action="/logout" method="post">
          <input type="submit" value="Log Out" />
        </form>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
