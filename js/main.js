const hourSection = document.querySelector(".hours");
const minSection = document.querySelector(".minute");
const secSection = document.querySelector(".seconds");
const dateContainer = document.querySelector(".date__container");
const btnDate = document.querySelector(".btn__date");

const date = new Date();
let getSec = date.getSeconds();
let getMin = date.getMinutes();
let getHour = date.getHours();
let getDates = date.toDateString();
let interval;


function getTime(){
    ++getSec;

    if(getSec === 60){
        ++getMin;
        getSec = 0;
    }

    if(getMin === 60){
        ++getHour;
        getMin = 0;
    }

    if(getSec < 10){
        getSec = `0${getSec}`;
    }

    if(getMin < 10){
        getMin = `0${getMin}`;
    }

    if(getHour < 10){
        getHour = `0${getHour}`;
    }

    secSection.textContent = getSec;
    minSection.textContent = getMin;
    hourSection.textContent = getHour;
}
interval = setInterval(getTime, 1000)

function getDate(){
    let dateSection;
    dateSection = `<p class = "date__section">${getDates}</p>`;

    dateContainer.innerHTML = dateSection;
}

getDate();