const express = require('express');
const app = express();
const qrcode = require('qrcode');
const path = require('path');
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>(
    res.render('index')
)
)
app.post('/qrcode',(req,res)=>{



    let browser = req.body.gokul
    qrcode.toDataURL(browser,(err,data)=>{
      

        res.render('qrcode',{"allwin":data})
    })
   
}
)
app.listen(10000)