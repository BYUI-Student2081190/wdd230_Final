//This gets how many times I have submited a juice to the company!

//Create a function that handles changing the information.
function UpdateCountDisplay()
{
    //Create varibles to hold the elements.
    const juiceSubInfo = document.querySelector("#juiceSubInfo");
    const specialMess = document.querySelector("#specialMessage");

    //Now change their text content based on the local variable.
    let numOfSubs = Number(window.localStorage.getItem("madeJ-frsh"));

    //Now assign the textcontent.
    juiceSubInfo.textContent = numOfSubs;

    //Now generate a small secret message.
    if (numOfSubs > 1 && numOfSubs <= 10)
    {
        specialMess.textContent = "Thank you so much!";
    }

    else
    {
        specialMess.textContent = "Thank you so much! You are one of our best!";
    };
};

//Call the function.
UpdateCountDisplay();