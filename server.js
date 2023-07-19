const express = require('express');
const app = express();
const fs = require('fs')
require('dotenv').config()
const port = 3000;

const stripeSecret = process.env.SECRET_KEY
const stripePublic = process.env.PUBLIC_KEY


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.get('/store', (req, res) => {
    fs.readFile('items.json', (err, data) => {
      if (err) {
        res.status(500).end();
      } else {
        res.render('store', {
            stripePublicKey: stripePublic,
          items: JSON.parse(data),
        });
      }
    });
  });
app.post('/purchase', (req, res) => {
    fs.readFile('items.json', (err, data) => {
      if (err) {
        res.status(500).end();
      } else {
       console.log('purchase')
       const itemsJson = JSON.parse(data)
       const itemsArray = itemsJson.music.concat(itemsJson.merch)
       let total = 0
       req.body.items.forEach(item => {
        const itemJson = itemsArray.find(item)
       });
    }});
  });
  




app.listen(port, () => console.log(`listening on https://localhost:${port}`))