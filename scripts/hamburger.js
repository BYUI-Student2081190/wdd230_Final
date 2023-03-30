//Hamburger button handler for the site.

//Create an varible that holds the button on the document.
const hamButton = document.getElementById("hamburger");

//Create a function that will toggle the nav to open.
function toggleNav()
{
    //toggle both the button and nav to be open.
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("navigation").classList.toggle("open");

    //Now create an ability to change the button icon.
    //I made this up in one of my other projects.
    if (hamButton.className == "open")
    {
        hamButton.innerText = `X`;
    }

    //Convert it back into a hamburger icon.
    else
    {
        hamButton.innerText = String.fromCharCode(9776);
    }
};

//Call the function based on a user clicking the hamburger
//button.

hamButton.onclick = toggleNav;