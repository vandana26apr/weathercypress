var request =require("request");
var should =require("should");
var expect =require("expect");
var util =require("util");
const https =require("http");
const baseurl ="http://api.openweathermap.org/data/2.5/weather";
const appid ="1b9a4cf6f5eecebb884e5b6e7144cb98";
const city="Glasgow";


describe('Weather forecaste api', function()
{

   
it('weather for city -glasgow', function(done)
{
    const fullurl = `${baseurl}?q=${city},uk&units=metric&appid=${appid}`;
    console.log(fullurl);
    request.get({ url:fullurl},function(error,response,body)
   {

       if( response.statusCode==200)
       {
          console.log(body);
          var resbody=JSON.parse(body);

          expect(resbody.name).toEqual(city);
       }
      else 
      console.log("this is not a valid city name");
       done();
   });


   })
})   