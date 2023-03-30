//This Script is made to get the weather from OpenWeather.org
//and display it in the weather card.

//Assign a varible to the URL to get the forcast.
const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=a32e387524432e5aff27fccd2f59383f&units=imperial"

//Assign a second varible to a URL to get the current weather.
const urlCurrWeather = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=a32e387524432e5aff27fccd2f59383f&units=imperial"

//Assign varibles to hold information about the card.
const currentWeatherImg = document.querySelector("#currentWeatherImage");

const currentWeatherDesc = document.querySelector("#weatherDescript");

const currentTemp = document.querySelector("#temp");

const currentHumi = document.querySelector("#humidity");

//Assign variables to handle the forecast.
const forecastSection = document.querySelector("#weatherBottom");


//Create a function to Fetch the Weather Data.
async function GetWeatherForeCastData()
{
    try{
        const response = await fetch(urlForecast);
        if (response.ok){
            const data = await response.json();
            //Object retreaved! Now it is time to send
            //it to a function that will put everything
            //nicely together for us to use.
            //Works 
            //console.log(data);
            CreateForecastDivs(data);

        }
        else{
            throw Error(await response.text());
        }
        
    }
    catch (error){
        console.log(error);
    }
};

//Create a second Function to get the Current Weather Data.
async function GetWeatherCurrentData()
{
    try{
        const response = await fetch(urlCurrWeather);
        if (response.ok){
            const data = await response.json();
            //Object retreaved! Now it is time to send
            //it to a function that will put everything
            //nicely together for us to use.
            //Works 
            //console.log(data);
            CreateCurrWeather(data);

        }
        else{
            throw Error(await response.text());
        }
        
    }
    catch (error){
        console.log(error);
    }
};

//Create a function to create the current weather icon.
function CreateCurrWeather(currWeatherData)
{
    //Assign the values to the document varibles.
    currentTemp.textContent = `${currWeatherData.main.temp.toFixed(0)}`;
    currentWeatherDesc.textContent = `${currWeatherData.weather[0].description}`;
    currentHumi.textContent = `${currWeatherData.main.humidity}`;

    //Create two varibles to hold info for the img.
    const imgDesc = currWeatherData.weather[0].description;
    const imgSrc = `https://openweathermap.org/img/w/${currWeatherData.weather[0].icon}.png`;

    //Now assign them to the img.
    currentWeatherImg.setAttribute("src", imgSrc);
    currentWeatherImg.setAttribute("alt", imgDesc);
};

//Create a function to create the divs that hold the forecast.
function CreateForecastDivs(forecastData)
{
    //Create the div elements to hold each bit of information.
    const weatherDivOne = document.createElement("div");
    const weatherDivTwo = document.createElement("div");
    const weatherDivThree = document.createElement("div");

    //Now assign varibles to hold their temp, and other things to
    //put in each div.
    const forecastOneTemp = document.createElement("p");
    forecastOneTemp.textContent = `${forecastData.list[3].main.temp.toFixed(0)}${String.fromCharCode(176)}F`;

    const forecastTwoTemp = document.createElement("p");
    forecastTwoTemp.textContent = `${forecastData.list[11].main.temp.toFixed(0)}${String.fromCharCode(176)}F`;

    const forecastThreeTemp = document.createElement("p");
    forecastThreeTemp.textContent = `${forecastData.list[19].main.temp.toFixed(0)}${String.fromCharCode(176)}F`;

    //Now create little img icons for each div.
    const divOneImg = document.createElement("img");
    const divTwoImg = document.createElement("img");
    const divThreeImg = document.createElement("img");

    //Now assign their attributes.
    divOneImg.setAttribute("src", `https://openweathermap.org/img/w/${forecastData.list[3].weather[0].icon}.png`);
    divTwoImg.setAttribute("src", `https://openweathermap.org/img/w/${forecastData.list[11].weather[0].icon}.png`);
    divThreeImg.setAttribute("src", `https://openweathermap.org/img/w/${forecastData.list[19].weather[0].icon}.png`)

    divOneImg.setAttribute("alt", forecastData.list[3].weather[0].description);
    divTwoImg.setAttribute("alt", forecastData.list[3].weather[0].description);
    divThreeImg.setAttribute("alt", forecastData.list[3].weather[0].description);

    //Add these as children to the divs.
    weatherDivOne.appendChild(divOneImg);
    weatherDivTwo.appendChild(divTwoImg);
    weatherDivThree.appendChild(divThreeImg);

    weatherDivOne.appendChild(forecastOneTemp);
    weatherDivTwo.appendChild(forecastTwoTemp);
    weatherDivThree.appendChild(forecastThreeTemp);

    //Now add the divs to the parent in the document.
    forecastSection.appendChild(weatherDivOne);
    forecastSection.appendChild(weatherDivTwo);
    forecastSection.appendChild(weatherDivThree);
};

//Call Function
GetWeatherCurrentData();
GetWeatherForeCastData();


