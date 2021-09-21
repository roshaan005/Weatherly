import { setUpUi } from "./DOM";
import moment from 'moment';
import rainyImage from "./images/noah-silliman-i2J9jnvaAbU-unsplash.jpg";
import rain  from "./images/cloudy.png"
import haze from "./images/wind.png"
import sun from "./images/sun.png"
import cloud from "./images/cloud.png"
import hazeyImage from "./images/daniel-gregoire-hZe5eOlvqDk-unsplash.jpg"
import clouds from "./images/d-ng-tr-n-qu-c-AAmYBHqbAEs-unsplash.jpg"
import sunnyPicture from  "./images/marko-blazevic-GFFGe2eGmiM-unsplash.jpg"

const domUpdate = (function(){
        const arrayRemove = function(arr,value){
            return arr.filter(function(ele){ 
                return ele != value; 
            });

        }

    const fetchData = function(lastElement){
      const localStorageArray = JSON.parse(localStorage.getItem("cities"))
       async function getWeather(){
           try{
            const response = await fetch((`https://api.openweathermap.org/data/2.5/weather?q=${lastElement}&APPID=30ecd00f770dcc0ab9ff7521f781caea`),{mode:"cors"});
            const weather = await response.json();
            updateUi(weather);
            changeBackground(weather);
            

           }
           catch(error){
              const newArray =  arrayRemove(localStorageArray,lastElement)
              newArray.push("karachi")
              localStorage.setItem("cities",JSON.stringify(newArray))
               
               
               
           }
           
        };


        getWeather()

    }
    const convertToCentigrade = function(temp){
        let centigardeTime = temp - 273.15;
        return centigardeTime;


    }

    

    const updateUi = function(weather){
        setUpUi.temperatureText.textContent = `${Math.round(convertToCentigrade(weather.main.temp))}°C`;
        setUpUi.cityName.textContent = weather.name;
        setUpUi.weatherStatus.textContent = weather.weather[0].main;
        setUpUi.humidityCard.textContent = "Humidity";
        setUpUi.humiditySpan.textContent = `${weather.main.humidity}%`;
        setUpUi.humidityCard.appendChild(setUpUi.humiditySpan);
        setUpUi.feelsLikeCard.textContent = "Feels like";
        setUpUi.feelsLikeSpan.textContent = `${Math.round(convertToCentigrade(weather.main.feels_like))}°C`;
        setUpUi.feelsLikeCard.appendChild(setUpUi.feelsLikeSpan);
         setUpUi.countryCard.textContent = "Country"
        setUpUi.countrySpan.textContent =  weather.sys.country;
        setUpUi.countryCard.appendChild(setUpUi.countrySpan);
        setUpUi.descriptionCard.textContent = "Description";
        setUpUi.descriptionSpan.textContent = weather.weather[0].description;
        setUpUi.descriptionCard.appendChild(setUpUi.descriptionSpan);
        setUpUi.sunRiseCard.textContent = "Sun rise";
        const sunRiseUnixTime = weather.sys.sunrise;
        const sunRiseFormatedTime = moment.unix(sunRiseUnixTime).format("HH:MM");
        setUpUi.sunRiseSpan.textContent = sunRiseFormatedTime;
        setUpUi.sunRiseCard.appendChild(setUpUi.sunRiseSpan);
        setUpUi.sunSetCard.textContent = "Sun set";
        const sunSetUnixTime = weather.sys.sunset;
        const sunSetFormatedTime = moment.unix(sunSetUnixTime).format("HH:MM");
        setUpUi.sunSetSpan.textContent = sunSetFormatedTime;
        setUpUi.sunSetCard.appendChild(setUpUi.sunSetSpan);
       

            

    }

  

    const changeBackground = function(weather){
        const weatherStatus = weather.weather[0].main;
        if(weatherStatus == "Rain"|| weatherStatus == "Drizzle"){
            setUpUi.backgroundPicture.style.backgroundImage = `url(${rainyImage})`
            setUpUi.weatherIllustration.src = rain
        }
        else if(weatherStatus=="Clouds"){
            setUpUi.backgroundPicture.style.backgroundImage = `url(${clouds})`
            setUpUi.weatherIllustration.src = cloud

        }
        else if (weatherStatus == "Clear"){
            setUpUi.backgroundPicture.style.backgroundImage = `url(${sunnyPicture})`
            setUpUi.weatherIllustration.src = sun
        }
        else if(weatherStatus=="Smoke"||weatherStatus=="Haze"){
            setUpUi.backgroundPicture.style.backgroundImage = `url(${hazeyImage})`
            setUpUi.weatherIllustration.src = haze
        }
      
    }
    


    return {fetchData}
})()
export{domUpdate}