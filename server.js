const express = require('express')
const app = express();
const port = process.env.PORT || 7400;
const ipCheck = require('./src/logic/appLogic');
let clicks = require('./db.json')

// static File Path
app.use(express.static(__dirname+'/public'));
// html file path
app.set('views','./src/views');
// view engine
app.set('view engine', 'ejs');
//app.use(morgan('dev'))

app.get('/',(req,res) => {
    res.render('input',{data:clicks})
})
app.post('/ipCount',(req,res)=>{
    console.log(clicks.length)
    //console.log(clicks)
    let output = ipCheck.getFinalOut(clicks)
    res.send(output)
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})