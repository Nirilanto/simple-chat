
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const moment = require('moment')
const { Client, Pool } = require('pg')
const { Subject } = require('rxjs')

const pool = new Pool()

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.get('/hdb_test', (req, res) => {
    res.json("server hdb chat run!")
  
  })

app.get('/hdb_msg', (req, res) => {
    res.json("hdb all msg")
  
  })

app.get('/hdb_user', (req, res) => {
    res.json("hdb all msg")
  
  })

app.get('/hdb_add/:name/:pw', (req, res) => {
  const name = req.params.name
  const pw = req.params.pw
  res.json([name,pw])
})
  

const PORT = process.NODE_PORT || 6010
app.listen(PORT, () => console.log(`server started ... @${PORT}`))

