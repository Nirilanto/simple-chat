
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

app.get('/', (req, res) => {
    res.json("ok ok ok!!")
  
  })
  

const PORT = process.NODE_PORT || 6010
app.listen(PORT, () => console.log(`server started ... @${PORT}`))

