const app = require('express')()
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/status/test', (req, res) => {
    res.send('Ok.')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Example app listening on port 5000!')
})
