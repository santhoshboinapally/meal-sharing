const app = require("./app");
const port = parseInt(process.env.CLIENT_PORT, 10) || process.env.API_PORT;

app.listen(port, () => {
  console.log(`Backend api available at ${process.env.API_PATH}`);
});
