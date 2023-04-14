const express = require('express');
const request=require('request');
const https=require('https');
const app=express();
const bodyParser=require('body-parser');
const { response } = require('express');

app.set('view engine', 'ejs');
app.use(express.static("public"));
//app.use(bodyParser.json());
var city="";
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=9191501e073af4aa3af2c6b02a379cc7";
    https.get(url,function(response){
        response.on("data",function(data){
            const weatherData= JSON.parse(data);
            const temperature=weatherData.main.temp;
            var data = {
                 temp:temperature,
                 city: weatherData.name,
               // console.log("The temperature of "+city+" is "+temp+" degree celcius.");
                icon: weatherData.weather[0].icon,
                 imageUrl: "http://openweathermap.org/img/wn/" + icon+"@2x.png",
                 des: weatherData.weather[0].description,
            }

            var data = {data: data}
            res.render("index.ejs",data);
        });
    });


});

app.post("/",function(req,res){
    const city=req.body.cityName;
    res.redirect("/"+ city);
});


app.listen(3000,function(req,res){
    console.log("It is working");
});