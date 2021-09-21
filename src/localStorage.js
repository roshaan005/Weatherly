import { domUpdate } from "./DOMupdate";

const localStorageModule = (function(){
    let cityList = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []
    const addToLocalStorage = function(cityName){
    
    cityList.push(cityName);
    localStorage.setItem("cities",JSON.stringify(cityList));
  
   
    }
    return{addToLocalStorage}

})();
export{localStorageModule}

