import { domUpdate } from "./DOMupdate";

const localStorage2 = (function(){
    const addToLocalStorage = function(array){
        let cityArrayForStorage = localStorage.getItem('city')
        ? JSON.parse(localStorage.getItem('city'))
        : [];
        localStorage.setItem('city', JSON.stringify(array));
        const cityRecordArray = JSON.parse(localStorage.getItem("city"));
        domUpdate.fetchData(cityRecordArray);
        
    }

    return {addToLocalStorage}

})()
export{localStorage2}

