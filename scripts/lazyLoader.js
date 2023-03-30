//This is a generic Lazy Loader for every page.

//Create a varible to hold all the data-src values and replace
//their current src.
let loadedImage = document.querySelectorAll("img[data-src]");

//Create a function that loads the image into the screen.
function lazyLoadImage(img)
{
    //Set the image attribute, and change the current src.
    img.setAttribute("src", img.getAttribute("data-src"));
    img.removeAttribute("data-src");
};

//Create a check to see if the current element 
//is in the viewport.
if ("IntersectionObserver" in window)
{
    //Create an InstersctionObserver object.
    const imageObserver = new IntersectionObserver((items, observer) => {

        //Now create a second loop to loop through each item.
        items.forEach((item) => {

            //If it is intersecting, then do something.
            if (item.isIntersecting){
                //Put the item into the lazy loader.
                lazyLoadImage(item.target);
                //Then stop looking at that specific item.
                //So it will not change again.
                observer.unobserve(item.target);
            }
        });
    });

    loadedImage.forEach((img) => {imageObserver.observe(img)});
}

else
{
    loadedImage.forEach((img) => {lazyLoadImage(img)});
};