const app = require('./app');
const port = process.env.PORT || 9090

app.listen(port, (err) => {
    console.log(`listening on port ${port}`)
});