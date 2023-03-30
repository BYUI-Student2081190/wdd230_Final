//This is for the information card on the home page.
//This collects data on how many times you have submitted
//juice to the site. This also displays the output to the
//user on the fresh page.

//Create a varible to hold the submit button.
const freshSubForm = document.querySelector("#juiceForm");

//Varbile to hold a Date Object.
const subDate = new Date();

//Varible to hold URL.
const juiceJSON = `https://brotherblazzard.github.io/canvas-content/fruit.json`;


//Create a function to fetch the JSON file.
async function GetFruitData()
{

    //Start by awaiting the JSON file.
    try{
        const response = await fetch(juiceJSON);

        //If we got it fine.
        if (response.ok){
            //Get the Data.
            const fruitData = await response.json();

            //Now test print the data.
            //Test Worked call the function.
            DisplayJuiceOutPut(fruitData);
        }

        else{
            throw Error(await response.text());
        }
    }

    catch (error){
        console.log(error);
    }
};

//Now create a function that runs the main program
//when the form get's submitted.
//This will handle getting the user inputs, and paring
//them neatly with the fruit info.

function DisplayJuiceOutPut(fruitData)
{
    //First things first call a function to
    //create a local varible and then add one to it.
    FormUseAmount();

    //Create elements to hold values from the form.
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const pNum = document.querySelector("#phoneNum").value;

    const fruitOne = document.querySelector("#fruitOne").value;
    const fruitTwo = document.querySelector("#fruitTwo").value;
    const fruitThree = document.querySelector("#fruitThree").value;

    const addInfo = document.querySelector("#extraInstruc").value;
    
    //Now assign a varible to hold the parent ele.
    const outputDiv = document.querySelector("#freshDisplay");

    //Set a class to it letting CSS know it is active.
    outputDiv.setAttribute("class", "active");

    //Now create the elements to append to the parent.
    const startMessage = document.createElement("h3");
    const userOrderName = document.createElement("p");
    const displayAddInfo = document.createElement("p");
    const fruitSelected = document.createElement("p");
    const displayNutritionFacts = document.createElement("p");
    const orderDate = document.createElement("p");

    //Get the information needed from the JSON, using a function.
    const fruitOneCarbo = GetCarboydrates(fruitOne, fruitData);
    const fruitOnePro = GetProtein(fruitOne, fruitData);
    const fruitOneFat = GetFat(fruitOne, fruitData);
    const fruitOneSugar = GetSugar(fruitOne, fruitData);
    const fruitOneCals = GetCalories(fruitOne, fruitData);

    const fruitTwoCarbo = GetCarboydrates(fruitTwo, fruitData);
    const fruitTwoPro = GetProtein(fruitTwo, fruitData);
    const fruitTwoFat = GetFat(fruitTwo, fruitData);
    const fruitTwoSugar = GetSugar(fruitTwo, fruitData);
    const fruitTwoCals = GetCalories(fruitTwo, fruitData);

    const fruitThreeCarbo = GetCarboydrates(fruitThree, fruitData);
    const fruitThreePro = GetProtein(fruitThree, fruitData);
    const fruitThreeFat = GetFat(fruitThree, fruitData);
    const fruitThreeSugar = GetSugar(fruitThree, fruitData);
    const fruitThreeCals = GetCalories(fruitThree, fruitData);

    //Now total up the fruit data.
    //All work!
    const totalCarbo = fruitOneCarbo + fruitTwoCarbo + fruitThreeCarbo;
    const totalPro = fruitOnePro + fruitTwoPro + fruitThreePro;
    const totalFat = fruitOneFat + fruitTwoFat + fruitThreeFat;
    const totalSugar = fruitOneSugar + fruitTwoSugar + fruitThreeSugar;
    const totalCals = fruitOneCals + fruitTwoCals + fruitThreeCals;

    //Use a function to get the month, but the rest get normally.
    const orderYear = subDate.getFullYear();
    const orderDay = subDate.getDate();
    const orderMonth = monthWord();

    //Now set up everything to go into the div, by setting
    //attributes, and innerText.
    startMessage.textContent = "Thank you for Ordering! Here is your order.";
    userOrderName.textContent = `Order Contact: ${name} -- ${email} -- ${pNum}`;

    //Create a check for add info.
    if (addInfo == "")
    {
        displayAddInfo.textContent = "Additional Info: None.";
    }

    else
    {
        displayAddInfo.textContent = `Additional Info: ${addInfo}`;
    };

    fruitSelected.textContent = `Fruit Selected: ${fruitOne}, ${fruitTwo}, ${fruitThree}`;

    displayNutritionFacts.textContent = `Total Carbohydrates: ${totalCarbo.toFixed(2)} Total Proten: ${totalPro.toFixed(2)} Total Fat: ${totalFat.toFixed(2)} Total Sugar: ${totalSugar.toFixed(2)} Total Calories: ${totalCals.toFixed(2)}`;
    
    orderDate.textContent = `Order Date: ${orderMonth}/${orderDay}/${orderYear}`;

    //Now append to the parent!!!
    outputDiv.appendChild(startMessage);
    outputDiv.appendChild(userOrderName);
    outputDiv.appendChild(displayAddInfo);
    outputDiv.appendChild(fruitSelected);
    outputDiv.appendChild(displayNutritionFacts);
    outputDiv.appendChild(orderDate);
};

//Function made to get the carbohydrates.
function GetCarboydrates(fruit, fruitData)
{
    //This let helps it return a value, and not
    //undefined.
    let returnObject = 0;

    //forEach loop the JSON file till the fruit name
    //equals the current object.
    fruitData.forEach((obj) => {

        if (fruit === obj.name)
        {
            returnObject = obj.nutritions.carbohydrates;
        }
    });

    //For some weird reason this needed to be moved out
    //here.
    //Return the carbohydrates.
    return returnObject;
};

//Function made to get the protein.
function GetProtein(fruit, fruitData)
{
    let returnObject = 0;

    //forEach loop the JSON file till the fruit name
    //equals the current object.
    fruitData.forEach((obj) => {

        if (fruit === obj.name)
        {
            returnObject = obj.nutritions.protein;
        }
    });

    //For some weird reason this needed to be moved out
    //here.
    //Return the protein.
    return returnObject;
};

//Function made to get the fat.
function GetFat(fruit, fruitData)
{
    let returnObject = 0;

    //forEach loop the JSON file till the fruit name
    //equals the current object.
    fruitData.forEach((obj) => {

        if (fruit === obj.name)
        {
            returnObject = obj.nutritions.fat;
        }
    });

    //For some weird reason this needed to be moved out
    //here.
    //Return the fat.
    return returnObject;
};

//Function made to get the sugar.
function GetSugar(fruit, fruitData)
{
    let returnObject = 0;

    //forEach loop the JSON file till the fruit name
    //equals the current object.
    fruitData.forEach((obj) => {

        if (fruit === obj.name)
        {
            returnObject = obj.nutritions.sugar;
        }
    });

    //For some weird reason this needed to be moved out
    //here.
    //Return the sugar.
    return returnObject;
};

//Function made to get the calories.
function GetCalories(fruit, fruitData)
{
    let returnObject = 0;

    //forEach loop the JSON file till the fruit name
    //equals the current object.
    fruitData.forEach((obj) => {

        if (fruit === obj.name)
        {
            returnObject = obj.nutritions.calories;
        }
    });

    //For some weird reason this needed to be moved out
    //here.
    //Return the calories.
    return returnObject;
};

//Function that creates and uses the local varible.
function FormUseAmount()
{
    //Get the varible.
    let numberOfJuice = Number(window.localStorage.getItem("madeJ-frsh"));

    //Create a second varible to hold the number.
    let timeDone = 1;

    //Create check.
    if (numberOfJuice > 0)
    {
        //Now when we do it again.
        timeDone = numberOfJuice;

        //Add timeDone by 1.
        timeDone++;

        //Now set it again.
        localStorage.setItem("madeJ-frsh", timeDone);
    }

    else
    {
        //Set the varible for the first time.
        localStorage.setItem("madeJ-frsh", timeDone);
    };
};

//Function to get the month in words.
function monthWord()
{
    const monthNum = subDate.getMonth();
    let monthWord = "";

    //Create a switch case for monthNum.
    switch (monthNum)
    {
        case 0:
            monthWord = "Jan"
            break;

        case 1:
            monthWord = "Feb"
            break;

        case 2:
            monthWord = "Mar"
            break;

        case 3:
            monthWord = "Apr"
            break;

        case 4:
            monthWord = "May"
            break;

        case 5:
            monthWord = "Jun"
            break;

        case 6:
            monthWord = "Jul"
            break;

        case 7:
            monthWord = "Aug"
            break;

        case 8:
            monthWord = "Sep"
            break;

        case 9:
            monthWord = "Oct"
            break;

        case 10:
            monthWord = "Nov"
            break;

        case 11:
            monthWord = "Dec"
            break;
    };

    //Return the month
    return monthWord;
}

//Submit event listener.
freshSubForm.addEventListener("submit", GetFruitData);