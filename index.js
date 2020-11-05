// const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const multer = require('multer')

const multerConfig = require('./multer')
const app = express() 
const PORT = process.env.PORT || 5000

const upload = multer(multerConfig);

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/index'))

app.post('/files', upload.single('file'), (req, res, next) => {
  res.json({ok: true})
}) 

app.get('/about', (req, res) => res.render('pages/SiPoS'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))