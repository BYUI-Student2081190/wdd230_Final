//This file is used to talk to the JSON file with all
//the fruit information on it. Then put it as options for
//the user in the form.

//Start by creatinig a variable to hold the JSON URL.
const fruitFile = `https://brotherblazzard.github.io/canvas-content/fruit.json`;

//Now create a function to read the file.
async function GetFruitData()
{

    //Start by awaiting the JSON file.
    try{
        const response = await fetch(fruitFile);

        //If we got it fine.
        if (response.ok){
            //Get the Data.
            const fruitData = await response.json();

            //Now test print the data.
            //Test Worked call the function.
            CreateElement(fruitData);
        }

        else{
            throw Error(await response.text());
        }
    }

    catch (error){
        console.log(error);
    }
};

//Function that will create variables to hold the elements,
//and then put options to the select form.
function CreateElement(fruitData)
{
    //Create the varibles to hold the eles.
    const selectOne = document.querySelector("#fruitOne");
    const selectTwo = document.querySelector("#fruitTwo");
    const selectThree = document.querySelector("#fruitThree");

    //Now create a call to a function that will give them all their
    //options.
    GenerateOptions(selectOne, fruitData);
    GenerateOptions(selectTwo, fruitData);
    GenerateOptions(selectThree, fruitData);

    //Now it should be completed.
};

//Create Function that will give the elements their options.
function GenerateOptions(ele, fruitData)
{
    //Do a forEach loop and get the name of every object.
    fruitData.forEach((obj) => {

        //Now create the object.
        let newEle = document.createElement("option");

        //Now assign it's value.
        newEle.setAttribute("value", obj.name);

        //Now assign it's inner text.
        newEle.textContent = obj.name;

        //Now put it onto the parent.
        ele.appendChild(newEle);
    });
};

//Call the function.
GetFruitData();