const express = require('express');
const https=require('https');
const app=express();
const ejs = require('ejs');
const bodyParser=require('body-parser');



app.set('view engine', 'ejs');
app.use(express.static("public"));
let city="nagpur";
app.use(bodyParser.urlencoded({extended:true}));


            

app.get("/",function(req,res){
    
    res.render("index",{validation:""});
});
app.post("/",function(req,res){

            let currentDate= new Date();
            let currentTime = currentDate.getHours(); 


            

            let options ={
                weekday : "long",
                day : "numeric",
                month : "long"
                    
            }
            //Today
            let day = currentDate.toLocaleDateString("en-US",options);
            
            //Tommorrow
            let cuDate = new Date();

            let day1= cuDate.setDate(new Date().getDate() + 1);
               
            let tom = cuDate.toLocaleDateString("en-US",options);

            //console.log(tom);

            //Day After Tommorrow

            let dfDate = new Date();

            let day2= dfDate.setDate(new Date().getDate() + 2);
               
            let dayAfter = dfDate.toLocaleDateString("en-US",options);

            


            let i = 0;
            const city=req.body.cityName;
            if(city==""){
                console.log("Enter city name!");
                let valid="Enter city name!";
                return res.render("index",{validation: valid});
               
            }

            const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9191501e073af4aa3af2c6b02a379cc7&units=metric`;
            
            https.get(url,function(response){
                console.log(response.statusCode);//200
                if(response.statusCode!=200){
                    console.log("Enter valid city name");
                    let validcity="Enter valid city name!";
                    return res.render("index",{validation: validcity});
                }

                
        
                response.on("data",function(data){
                   // console.log(data);//hexadecimal code of weather data
                    
                        const weatherData= JSON.parse(data);

                        if (currentTime >=0 && currentTime<3 ) {
                            i=0;
                        }
                        if (currentTime >= 3 && currentTime < 6) {
                            i=1;
                        }
                        if (currentTime >= 6 && currentTime < 9) {
                            i=2;
                        }
                        if (currentTime >= 9 && currentTime < 12) {
                            i=3;
                        }
                        if (currentTime >= 12 && currentTime < 15) {
                            i=4;
                        }
                        if (currentTime >= 15 && currentTime < 18) {
                            i=5;
                        }
                        if (currentTime >= 18 && currentTime < 21) {
                            i=6;
                        }
                        if ( currentTime >= 21) {
                            i=7;
                        }
                     
                   
                    //console.log(weatherData);//convert hexadecimal or string into language by using javascrit object
                 
                    const cityforcast= weatherData.city.name;
                    const temp1=Math.round(weatherData.list[0].main.temp);
                    //const city1=weatherData.name;
                   // console.log("The temperature of "+city+" is "+temp+" degree celcius.");
                   //const icon=weatherData.weather[0].icon;
                    //const imageUrl="http://openweathermap.org/img/wn/" + icon+"@2x.png";
                    
                    const des1=weatherData.list[0].weather[0].description;
                    const humidity1 =weatherData.list[0].main.humidity;
                    const feels1 = weatherData.list[0].main.feels_like;
                    const windSpeed1 = weatherData.list[0].wind.speed;
                        let tempT3,desT3,tempT4,desT4,tempT5,desT5,tempT6,desT6,tempT7,desT7;
                        let tempTom3,desTom3,tempTom4,desTom4,tempTom5,desTom5,tempTom6,desTom6,tempTom7,desTom7;
                        let tempDF3,desDF3,tempDF4,desDF4,tempDF5,desDF5,tempDF6,desDF6,tempDF7,desDF7;
                     if(i<4){
                        let a = 3-i;
                       
                         tempT3=Math.round(weatherData.list[a].main.temp);
                         desT3=weatherData.list[a].weather[0].description;
                         

                         tempT4=Math.round(weatherData.list[a+1].main.temp);
                         desT4=weatherData.list[a+1].weather[0].description;
                        

                         tempT5=Math.round(weatherData.list[a+2].main.temp);
                         desT5=weatherData.list[a+2].weather[0].description;
                        

                         tempT6=Math.round(weatherData.list[a+3].main.temp);
                         desT6=weatherData.list[a+3].weather[0].description;
                       

                         tempT7=Math.round(weatherData.list[a+4].main.temp);
                         desT7=weatherData.list[a+4].weather[0].description;
                        
                     }                     
                     else if(i==4){
                        let a= -1;

                         tempT3="--";
                         desT3="--";
                        

                         tempT4=Math.round(weatherData.list[a+1].main.temp);
                         desT4=weatherData.list[a+1].weather[0].description;
                        
                         tempT5=Math.round(weatherData.list[a+2].main.temp);
                         desT5=weatherData.list[a+2].weather[0].description;
                        

                         tempT6=Math.round(weatherData.list[a+3].main.temp);
                         desT6=weatherData.list[a+3].weather[0].description;
                         

                         tempT7=Math.round(weatherData.list[a+4].main.temp);
                         desT7=weatherData.list[a+4].weather[0].description;
                        
                     }
                     else if (i==5) {
                        let a= -2;

                         tempT3="--";
                         desT3="--";
                       

                         tempT4="--";
                         desT4="--";
                        

                         tempT5=Math.round(weatherData.list[a+2].main.temp);
                         desT5=weatherData.list[a+2].weather[0].description;
                        

                         tempT6=Math.round(weatherData.list[a+3].main.temp);
                         desT6=weatherData.list[a+3].weather[0].description;
                        

                         tempT7=Math.round(weatherData.list[a+4].main.temp);
                         desT7=weatherData.list[a+4].weather[0].description;
                        
                     }
                     else if (i==6) {
                        let a = -3;
                         tempT3="--";
                         desT3="--";
                        

                         tempT4="--";
                         desT4="--";
                        
                        
                         tempT5="--";
                         desT5="--";
                        


                         tempT6=Math.round(weatherData.list[a+3].main.temp);
                         desT6=weatherData.list[a+3].weather[0].description;
                        

                         tempT7=Math.round(weatherData.list[a+4].main.temp);
                         desT7=weatherData.list[a+4].weather[0].description;
                        
                     }
                     else if (i==7){
                        let a = -4;
                        tempT3="--";
                         desT3="--";
                        

                         tempT4="--";
                         desT4="--";
                        
                        
                         tempT5="--";
                         desT5="--";

                         tempT6="--";
                         desT6="--";
                        

                         tempT7=Math.round(weatherData.list[a+4].main.temp);
                         desT7=weatherData.list[a+4].weather[0].description;
                        
                     }


                     //tommorrow -- 3 hours
                     let b = 11-i;
                         tempTom3=Math.round(weatherData.list[b].main.temp);
                         desTom3=weatherData.list[b].weather[0].description;
                         

                         tempTom4=Math.round(weatherData.list[b+1].main.temp);
                         desTom4=weatherData.list[b+1].weather[0].description;
                        

                         tempTom5=Math.round(weatherData.list[b+2].main.temp);
                         desTom5=weatherData.list[b+2].weather[0].description;
                        

                         tempTom6=Math.round(weatherData.list[b+3].main.temp);
                         desTom6=weatherData.list[b+3].weather[0].description;
                       

                         tempTom7=Math.round(weatherData.list[b+4].main.temp);
                         desTom7=weatherData.list[b+4].weather[0].description;


                         //day after tommorrow
                         let c= 19-i;
                         tempDF3=Math.round(weatherData.list[c].main.temp);
                         desDF3=weatherData.list[c].weather[0].description;
                         

                         tempDF4=Math.round(weatherData.list[c+1].main.temp);
                         desDF4=weatherData.list[c+1].weather[0].description;
                        

                         tempDF5=Math.round(weatherData.list[c+2].main.temp);
                         desDF5=weatherData.list[c+2].weather[0].description;
                        

                         tempDF6=Math.round(weatherData.list[c+3].main.temp);
                         desDF6=weatherData.list[c+3].weather[0].description;
                       

                         tempDF7=Math.round(weatherData.list[c+4].main.temp);
                         desDF7=weatherData.list[c+4].weather[0].description;
                       // console.log(tempDF7);

                    // Tommorow
                     const temp2=Math.round(weatherData.list[8].main.temp);
                   


                    const des2=weatherData.list[8].weather[0].description;
                    const humidity2 =weatherData.list[8].main.humidity;
                    const feels2= weatherData.list[8].main.feels_like;
                    const windSpeed2= weatherData.list[8].wind.speed;

                    //day after tommorrow
                    const temp3=Math.round(weatherData.list[16].main.temp);


                    const des3=weatherData.list[16].weather[0].description;
                    const humidity3 =weatherData.list[16].main.humidity;
                    const feels3 = weatherData.list[16].main.feels_like;
                    const windSpeed3 = weatherData.list[16].wind.speed;

                    data= {
                        cityName:cityforcast,

                        tdDate:day,                        
                        tom:tom,
                        dayAfter:dayAfter,
                        t1: temp1,
                        d1:des1,
                        h1:humidity1,
                        f1:feels1,
                        w1: windSpeed1,
                        t2: temp2,
                        d2:des2,
                        h2:humidity2,
                        f2:feels2,
                        w2: windSpeed2,
                        t3: temp3,
                        d3:des3,
                        h3:humidity3,
                        f3:feels3,
                        w3: windSpeed3,

                        tdT1:tempT3,
                        tdD1:desT3,                     
                        tdT2:tempT4,
                        tdD2:desT4,                       
                        tdT3:tempT5,
                        tdD3:desT5,                       
                        tdT4:tempT6,
                        tdD4:desT6,                     
                        tdT5:tempT7,
                        tdD5:desT7,
                    
                        tomT1:tempTom3,
                        tomD1:desTom3,                     
                        tomT2:tempTom4,
                        tomD2:desTom4,                       
                        tomT3:tempTom5,
                        tomD3:desTom5,                       
                        tomT4:tempTom6,
                        tomD4:desTom6,                     
                        tomT5:tempTom7,
                        tomD5:desTom7,

                        dfT1:tempDF3,
                        dfD1:desDF3,                     
                        dfT2:tempDF4,
                        dfD2:desDF4,                       
                        dfT3:tempDF5,
                        dfD3:desDF5,                       
                        dfT4:tempDF6,
                        dfD4:desDF6,                     
                        dfT5:tempDF7,
                        dfD5:desDF7



                        

                        

                    }
                    

                var data = {data: data}
                    return res.render("modify",data);
                
                                
                    
                });
            });
            
        
        
    
});

// 

app.listen(3000,function(req,res){
    console.log("It is working");
});