import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send('Welcome to the Server...')
})

app.listen(3000, () => {
    console.log('This is port 3000')
})