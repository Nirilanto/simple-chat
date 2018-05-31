const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const moment = require('moment')
const {
  Client,
  Pool
} = require('pg')
const {
  Subject
} = require('rxjs')

const pool = new Pool()

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.get('/hdb_test/:usend/:urecu/:msg', async (req, res) => {
  const usend = req.params.usend
  const urecu = req.params.urecu
  const msg = req.params.msg
  const all_msg = await pool.query(`INSERT INTO public.table_msg(
   user_send, use_recue, core_msg, date_time)
    VALUES (${usend} , ${urecu},'${msg}', now());`)
  res.json("insert!!")
})
// 
app.get('/hdb_msg', async (req, res) => {
  const pool = new Pool()
  const all_msg = await pool.query(`SELECT id_msg, user_send, use_recue, core_msg, date_time	
  FROM public.table_msg`)
  res.json(all_msg.rows)
})
//SELECT id_user, login_user, name_user	FROM public.table_usr;
app.get('/hdb_user', async (req, res) => {
  const pool = new Pool()
  const all_user = await pool.query(`SELECT id_user, login_user, name_user
	FROM public.table_usr;`)
  res.json(all_user.rows)

})

app.get('/hdb_add/:name/:pw', async (req, res) => {
  const name = req.params.name
  const pw = req.params.pw
  //SELECT max (id_user) as nbr	FROM public.table_usr ;
  const nbr = await pool.query(`SELECT max (id_user) as nbr	FROM public.table_usr `)
  let id = nbr.rows[0].nbr + 1
  const all_user = await pool.query(`INSERT INTO public.table_usr(
    id_user, login_user, name_user)
    VALUES (${ id },'${ name }','${ pw }');`)
  res.json(id)
})

const PORT = process.NODE_PORT || 6031
app.listen(PORT, () => console.log(`server started ... @${PORT}`))