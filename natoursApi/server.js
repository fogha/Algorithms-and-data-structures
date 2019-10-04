const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

//console.log(process.env);

//Starting server and port information
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
