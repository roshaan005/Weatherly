import './styles.css'
import { setUpUi} from './DOM'
import{localStorage2} from "./localStorage"
import {domUpdate} from "./DOMupdate"
import moment from 'moment';

const clock = function(){
    const dateToday = new Date()
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let session = "AM"

    h= (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
     
    if(h == 0){
        h = 12;
    }
    if(h>12){
        h = h-12;
        session = "PM"
    }


    setUpUi.cityTime.textContent = `${h}:${m}:${s} ${session}`

    setTimeout(clock,1000);

}
    
clock()




setUpUi.appendToBody();
let cityArray = [];
setUpUi.searchBtn.addEventListener("click",function(){
    const city = setUpUi.searchBar.value;
    cityArray.push(city)
    localStorage2.addToLocalStorage(cityArray);
   
    
})



 domUpdate.fetchData(["karachi"]);



