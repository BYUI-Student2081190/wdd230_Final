//This JS file handles showing the User when the page was last
//updated.

//Create a varible to hold the element in the doc.
const updateTimeEle = document.querySelector("#updateTime");

//Create a Date object that contains the information of
//the documents modified date.
let lastMod = new Date(document.lastModified);

let modMonth = lastMod.getMonth();
//Add one to the month so it is the month.
modMonth += 1;

const modYear = lastMod.getFullYear();
const modDay = lastMod.getDate();

//Now for clock time.
const modHour = lastMod.getHours();
const modMinute = lastMod.getMinutes();
const modSec = lastMod.getSeconds();
const modTime = `${modHour}:${modMinute}:${modSec}`;

const modDateTime = `${modMonth}-${modDay}-${modYear} | ${modTime}`;

//Now set the page update time
updateTimeEle.textContent = modDateTime;