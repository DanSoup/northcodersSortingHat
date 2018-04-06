const app = require('./app');
const port = process.env.PORT || 9090

console.log(process.env)

app.listen(port, (err) => {
    console.log(`listening on port ${port}`)
});