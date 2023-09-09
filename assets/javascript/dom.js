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

console.log(document.getElementById("finder").style.zIndex);

closeFinder.addEventListener("click", (event) => {
	finder.style.display = "none";
	finder.style.zIndex = "0";
});

openFinder.addEventListener("click", (event) => {
	finder.style.display = "flex";
	messages.style.zIndex = -1;
	finder.style.zIndex = +1;
});

closeMessages.addEventListener("click", (event) => {
	messages.style.display = "none";
	messages.style.zIndex = "0";
});

messagesDock.addEventListener("click", (event) => {
	messages.style.display = "flex";
	finder.style.zIndex = -1;
	messages.style.zIndex = +1;
});

catPicsIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Cat pics";
});

hdIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Macintosh HD";
});

coolStuffIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Cool stuff";
});

documentsIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Documents";
});
