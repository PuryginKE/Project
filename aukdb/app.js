var express = require('express');
var http = require('http');
var cors = require('cors');
var pg = require('pg');

var app = express()
new http.Server(app);

app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/*+json' }));
var conString = "postgres://postgres:Qaz1234@localhost:5432/postgres";
var client = new pg.Client(conString);
client.connect();
var jsonParser = bodyParser.json()
var apiRoutes = express.Router()
app.use('/v', apiRoutes);

apiRoutes.get('/post', (req, res) => {
    res.status(200).json({
    success: true,
    text: 'kek'
    });
});

apiRoutes.get('/list', (req, res) => {
   var query = client.query("SELECT * FROM auklist_l ORDER BY id DESC");
   query.then((data) => { res.json(data.rows) 
  })
});

apiRoutes.get('/toplist', (req, res) => {
  var query = client.query("SELECT * FROM auklist_l WHERE participant = (SELECT MAX(participant) FROM public.auklist_l) LIMIT 1;");
  query.then((data) => { 
    debugger
    if(data.rowCount === 1){
      res.json(data.rows)
    } else {
      res.status(400).json({
        success: false,
        text: 'none'
      });
    }
 })
});

apiRoutes.get('/charts', (req, res) => {
  var date = new Date();
  var mdate = date.getMonth();
  var query = client.query("SELECT 	 to_char(date_on, 'MM-YYYY'), COUNT(id)FROM public.auklist_l GROUP BY to_char(date_on, 'MM-YYYY') ORDER BY to_char(date_on, 'MM-YYYY') ASC;");
   query.then((data) => { res.json(data.rows) 
   })
});

/*
 apiRoutes.get('/get_post', (req, res) =>{
        var query = client.query("SELECT name_p FROM auk_post");
        query.then((data) => { res.json(data.rows) })
   
});

*/
apiRoutes.post('/create', jsonParser, (req, res) =>{ 
    const body = req.body;
    var query = client.query("INSERT INTO auklist_l (name_auk, type_auk, info, price, date_on, date_off) VALUES ('"+ body.name +"','" + body.type+ "','" +body.info +"','" + body.price + "','"+ body.dateon + "','" + body.dateoff +  "')");
query.then((data) => { res.json(data.rows)
    })
});


apiRoutes.post('/registr', jsonParser, (req, res) =>{   
  const body = req.body;
  var query = client.query("INSERT INTO user_t (login, password) VALUES ('"+ body.login +"','" + body.password + "')");
  query.then((data) => { res.json(data.rows)
  })
});


apiRoutes.put('/entercase', jsonParser, (req, res) =>{   
  const body = req.body;
  debugger
  var query = client.query("UPDATE auklist_l SET participant=participant +1 WHERE id = '3'");
  query.then((data) => { res.json(data.rows)
    debugger
  })
});

apiRoutes.post('/enter', jsonParser, (req, res) =>{
    
  const body = req.body;
  var query = client.query("SELECT login,password FROM user_t WHERE login='" + body.login + "' AND password='" + body.password + "';"); 
  query.then((data) => {
    if (data.rows.length){
        res.status(200).json({
        success: true,
        text: 'ok'
      });
    } else {
      res.status(400).json({
        success: false,
        text: 'none'
      });
    }
  });
});

app.listen(3000);

module.exports = app;
