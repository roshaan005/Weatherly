import { setUpUi } from "./DOM";
import moment from 'moment';
import rainyImage from "./images/noah-silliman-i2J9jnvaAbU-unsplash.jpg";
import cloudyImage from "./images/patrick-hendry-40AndmX3lvU-unsplash.jpg";
import clouds from "./images/d-ng-tr-n-qu-c-AAmYBHqbAEs-unsplash.jpg"
import sunnyPicture from  "./images/desert-1654439_1280.jpg"

const domUpdate = (function(){
    const fetchData = function(array){
       let lastElement = array[array.length-1]
       async function getWeather(){
           try{
            const response = await fetch((`http://api.openweathermap.org/data/2.5/weather?q=${lastElement}&APPID=30ecd00f770dcc0ab9ff7521f781caea`),{mode:"cors"});
            const weather = await response.json();
            console.log(weather);
            updateUi(weather);
            changeBackground(weather);
            

           }
           catch(err){
               console.log(err)
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
        setUpUi.humidityCard.textContent = "humidity";
        setUpUi.humiditySpan.textContent = `${weather.main.humidity}%`;
        setUpUi.humidityCard.appendChild(setUpUi.humiditySpan);
        setUpUi.feelsLikeCard.textContent = "feels like";
        setUpUi.feelsLikeSpan.textContent = `${Math.round(convertToCentigrade(weather.main.feels_like))}°C`;
        setUpUi.feelsLikeCard.appendChild(setUpUi.feelsLikeSpan);
         setUpUi.countryCard.textContent = "country"
        setUpUi.countrySpan.textContent =  weather.sys.country;
        setUpUi.countryCard.appendChild(setUpUi.countrySpan);
        setUpUi.descriptionCard.textContent = "description";
        setUpUi.descriptionSpan.textContent = weather.weather[0].description;
        setUpUi.descriptionCard.appendChild(setUpUi.descriptionSpan);
        setUpUi.sunRiseCard.textContent = "sun rise";
        const sunRiseUnixTime = weather.sys.sunrise;
        const sunRiseFormatedTime = moment.unix(sunRiseUnixTime).format("HH:MM");
        setUpUi.sunRiseSpan.textContent = sunRiseFormatedTime;
        setUpUi.sunRiseCard.appendChild(setUpUi.sunRiseSpan);
        setUpUi.sunSetCard.textContent = "sun set";
        const sunSetUnixTime = weather.sys.sunset;
        const sunSetFormatedTime = moment.unix(sunSetUnixTime).format("HH:MM");
        setUpUi.sunSetSpan.textContent = sunSetFormatedTime;
        setUpUi.sunSetCard.appendChild(setUpUi.sunSetSpan);
       

            

    }

  

    const changeBackground = function(weather){
        const weatherStatus = weather.weather[0].main;
        if(weatherStatus == "Rain"|| weatherStatus == "Drizzle"){
            setUpUi.backgroundPicture.style.backgroundImage = `url(${rainyImage})`
        }
        else if(weatherStatus=="Clouds" || weatherStatus == "Haze"|| weatherStatus == "Smoke"){
            setUpUi.backgroundPicture.style.backgroundImage = `url(${clouds})`
            

        }
        else if (weatherStatus == "Clear"){
            setUpUi.backgroundPicture.style.backgroundImage = `url(${sunnyPicture})`
        }
    }
    


    return {fetchData}
})()
export{domUpdate}