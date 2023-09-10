const finder = document.querySelector("#finder");
const openFinder = document.querySelector("#finderDock");
const closeFinder = document.querySelector("#finderClose");
const catPicsIcon = document.querySelector("#catPicsIcon");
const hdIcon = document.querySelector("#hdIcon");
const coolStuffIcon = document.querySelector("#coolStuffIcon");
const documentsIcon = document.querySelector("#documentsIcon");
const finderHeader = document.querySelector("#finderHeader");
const finderHeaderText = document.querySelector("#finderHeaderText");
const messages = document.querySelector("#messages");
const messagesDock = document.querySelector("#messagesDock");
const closeMessages = document.querySelector("#messagesClose");
const openNotes = document.querySelector("#notesDock");
const notes = document.querySelector("#notes");
const closeNotes = document.querySelector("#notesClose");
const openCalculator = document.querySelector("#calculatorDock");
const calculator = document.querySelector("#calculator");
const closeCalculator = document.querySelector("#calculatorClose");
const openDownloads = document.querySelector("#downloadsDock");
const openBin = document.querySelector("#binDock");

// ---> Date and time -- to its own javascript file?
const dateAndTime = document.querySelector("#dateAndTime");
const date = new Date().toUTCString().slice(0, 11);
console.log(date);

const australiaDateAndTime = new Date().toLocaleString("en-US", {
	timeZone: "Australia/Sydney",
});

const australiaTime = australiaDateAndTime.slice(11, 15);
const australiaAmOrPm = australiaDateAndTime.slice(19);

const currentDateAndTime = `${date} ${australiaTime} ${australiaAmOrPm}`;

dateAndTime.innerHTML = currentDateAndTime;

// <---

closeFinder.addEventListener("click", (event) => {
	finder.style.display = "none";
	finder.style.zIndex = "0";
});

openFinder.addEventListener("click", (event) => {
	finder.style.display = "flex";
	messages.style.zIndex = 1;
	notes.style.zIndex = 1;
	calculator.style.zIndex = 1;
	finder.style.zIndex = 2;
});

closeCalculator.addEventListener("click", (event) => {
	calculator.style.display = "none";
	calculator.style.zIndex = "0";
});

openCalculator.addEventListener("click", (event) => {
	calculator.style.display = "flex";
	messages.style.zIndex = 1;
	notes.style.zIndex = 1;
	finder.style.zIndex = 1;
	calculator.style.zIndex = 2;
});

openNotes.addEventListener("click", (event) => {
	notes.style.display = "flex";
	messages.style.zIndex = 1;
	finder.style.zIndex = 1;
	notes.style.zIndex = 2;
	calculator.style.zIndex = 1;
});
closeNotes.addEventListener("click", (event) => {
	notes.style.display = "none";
	notes.style.zIndex = "0";
});

closeMessages.addEventListener("click", (event) => {
	messages.style.display = "none";
	messages.style.zIndex = "0";
});

messagesDock.addEventListener("click", (event) => {
	messages.style.display = "flex";
	finder.style.zIndex = 1;
	notes.style.zIndex = 1;
	calculator.style.zIndex = 1;
	messages.style.zIndex = 2;
});

catPicsIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Cat pics";
	finder.style.zIndex = 2;
});

hdIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Macintosh HD";
	finder.style.zIndex = 2;
});

coolStuffIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Cool stuff";
	finder.style.zIndex = 2;
});

documentsIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Documents";
	finder.style.zIndex = 2;
});

openDownloads.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Downloads";
	finder.style.zIndex = 2;
});

openBin.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Bin";
	finder.style.zIndex = 2;
});
