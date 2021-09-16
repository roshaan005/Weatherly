import cloudImage from "./images/storm.png"
import searchicon from "./images/search-3-16 (1).png"
import background from "./images/diego-jimenez-XHDtPRj535A-unsplash.jpg"


const setUpUi = (function(){
    const backgroundPicture = document.createElement("div");
    const pictureSection = document.createElement("div")
    const detailsMenu = document.createElement("div");
    const searchContainer = document.createElement("section");
    const searchBar = document.createElement("input");
    searchBar.setAttribute("type","text");
    const searchBtn = document.createElement("div");
    const searchIcon  = new Image()
    searchIcon.src = searchicon
    const temperatureDetails = document.createElement("section");
    const temperatureText = document.createElement("div");
    const weatherDescription = document.createElement("div");
    const weatherIllustration = new Image();
    weatherIllustration.src = cloudImage;
    const weatherStatus = document.createElement("span");
    const cityDescription = document.createElement("div");
    const cityName = document.createElement("div");
    const cityTime = document.createElement("div");
    const details = document.createElement("section");
    const detialsHolder = document.createElement("ul");
    const  humidityCard = document.createElement("li");
    const humiditySpan = document.createElement("span")
    const  feelsLikeCard = document.createElement("li");
    const feelsLikeSpan = document.createElement("span");
    const  sunRiseCard = document.createElement("li");
    const sunRiseSpan = document.createElement("span")
    const  sunSetCard = document.createElement("li");
    const sunSetSpan = document.createElement("span");
    const  countryCard = document.createElement("li");
    const countrySpan = document.createElement("span")
    const  descriptionCard = document.createElement("li");
    const descriptionSpan = document.createElement("span")

    //classes
    backgroundPicture.classList.add("background");
    detailsMenu.classList.add("details-menu");
    searchContainer.classList.add("search-container");
    searchBar.classList.add("search-bar");
    searchBtn.classList.add("search-btn");
    pictureSection.classList.add("picture");
    temperatureDetails.classList.add("temperature-details");
    temperatureText.classList.add("temperature");
    weatherDescription.classList.add("description");
    weatherIllustration.classList.add("weather-illustartion");
    weatherStatus.classList.add("weather");
    cityDescription.classList.add("city");
    cityName.classList.add("city-name");
    cityTime.classList.add("time");
    details.classList.add("details");
    detialsHolder.classList.add("details-holder");

    humidityCard.classList.add("display-card");
    feelsLikeCard.classList.add("display-card");
    sunRiseCard.classList.add("display-card");
    sunSetCard.classList.add("display-card");
    countryCard.classList.add("display-card");
    descriptionCard.classList.add("display-card");
    humiditySpan.classList.add("weather-span");
    feelsLikeSpan.classList.add("weather-span");
    countrySpan.classList.add("weather-span");
    sunSetSpan.classList.add("weather-span");
    sunRiseSpan.classList.add("weather-span");
    descriptionSpan.classList.add("weather-span");





 const appendToBody = function(){
    searchContainer.appendChild(searchBar);
    searchBtn.appendChild(searchIcon)
    searchContainer.appendChild(searchBtn);
    temperatureDetails.appendChild(temperatureText);
    weatherDescription.appendChild(weatherIllustration);
    weatherDescription.appendChild(weatherStatus);
    temperatureDetails.appendChild(weatherDescription);
    cityDescription.appendChild(cityName);
    cityDescription.appendChild(cityTime);
    temperatureDetails.appendChild(cityDescription);
    detialsHolder.appendChild(humidityCard);
    detialsHolder.appendChild(feelsLikeCard);
    detialsHolder.appendChild(descriptionCard);
    detialsHolder.appendChild(countryCard);
    detialsHolder.appendChild(sunSetCard);
    detialsHolder.appendChild(sunRiseCard);
    details.appendChild(detialsHolder);
    detailsMenu.appendChild(searchContainer);
    detailsMenu.appendChild(temperatureDetails);
    detailsMenu.appendChild(details);
    
   
    backgroundPicture.appendChild(pictureSection);
    backgroundPicture.appendChild(detailsMenu);
    const body = document.querySelector("body")
    body.appendChild(backgroundPicture)
    

 }

  return {appendToBody,searchBar,searchBtn,temperatureText,cityName,weatherStatus,humidityCard,humiditySpan,feelsLikeSpan,feelsLikeCard,
sunRiseSpan,sunRiseCard,backgroundPicture,sunSetSpan,cityTime,sunSetCard,countryCard,countrySpan,descriptionCard,descriptionSpan}

})()

export{setUpUi}

