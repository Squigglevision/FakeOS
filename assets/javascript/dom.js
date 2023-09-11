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

// ---> menu functions - to their own javascript file?
const leftMenu = document.querySelector("#leftMenu");
const menuToHover = leftMenu.querySelectorAll("li");
const hovered = leftMenu.querySelectorAll("li.menu__hover");

console.log(menuToHover);

menuToHover.forEach((li) => {
	li.addEventListener("mouseover", (event) => {
		li.classList.add("menu__hover");
	});
});

menuToHover.forEach((li) => {
	li.addEventListener("mouseleave", (event) => {
		li.classList.remove("menu__hover");
	});
});

const appleToHover = document.querySelector("#appleToHover");
const appleHovered = appleToHover.querySelectorAll("li");
const appTitleToHover = document.querySelector("#appTitleToHover");
const appTitleHovered = appTitleToHover.querySelectorAll(
	"li:not(.dropdown__app--faded)"
);
const fileToHover = document.querySelector("#fileToHover");
const fileHovered = fileToHover.querySelectorAll(
	"li:not(.dropdown__file--faded)"
);
const editToHover = document.querySelector("#editToHover");
const editHovered = editToHover.querySelectorAll(
	"li:not(.dropdown__edit--faded)"
);
const viewToHover = document.querySelector("#viewToHover");
const viewHovered = viewToHover.querySelectorAll(
	"li:not(.dropdown__view--faded)"
);
const goToHover = document.querySelector("#goToHover");
const goHovered = goToHover.querySelectorAll("li:not(.dropdown__go--faded)");
const windowToHover = document.querySelector("#windowToHover");
const windowHovered = windowToHover.querySelectorAll(
	"li:not(.dropdown__window--faded)"
);
const helpToHover = document.querySelector("#helpToHover");
const helpHovered = helpToHover.querySelectorAll(
	"li:not(.dropdown__help--faded)"
);

appleHovered.forEach((li) => {
	li.addEventListener("mouseover", (event) => {
		li.classList.add("dropdown__hover");
	});
});

appleHovered.forEach((li) => {
	li.addEventListener("mouseleave", (event) => {
		li.classList.remove("dropdown__hover");
	});
});

appTitleHovered.forEach((li) => {
	li.addEventListener("mouseover", (event) => {
		li.classList.add("dropdown__hover");
	});
});

appTitleHovered.forEach((li) => {
	li.addEventListener("mouseleave", (event) => {
		li.classList.remove("dropdown__hover");
	});
});

fileHovered.forEach((li) => {
	li.addEventListener("mouseover", (event) => {
		li.classList.add("dropdown__hover");
	});
});

fileHovered.forEach((li) => {
	li.addEventListener("mouseleave", (event) => {
		li.classList.remove("dropdown__hover");
	});
});

editHovered.forEach((li) => {
	li.addEventListener("mouseover", (event) => {
		li.classList.add("dropdown__hover");
	});
});

editHovered.forEach((li) => {
	li.addEventListener("mouseleave", (event) => {
		li.classList.remove("dropdown__hover");
	});
});

viewHovered.forEach((li) => {
	li.addEventListener("mouseover", (event) => {
		li.classList.add("dropdown__hover");
	});
});

viewHovered.forEach((li) => {
	li.addEventListener("mouseleave", (event) => {
		li.classList.remove("dropdown__hover");
	});
});

goHovered.forEach((li) => {
	li.addEventListener("mouseover", (event) => {
		li.classList.add("dropdown__hover");
	});
});

goHovered.forEach((li) => {
	li.addEventListener("mouseleave", (event) => {
		li.classList.remove("dropdown__hover");
	});
});

windowHovered.forEach((li) => {
	li.addEventListener("mouseover", (event) => {
		li.classList.add("dropdown__hover");
	});
});

windowHovered.forEach((li) => {
	li.addEventListener("mouseleave", (event) => {
		li.classList.remove("dropdown__hover");
	});
});

helpHovered.forEach((li) => {
	li.addEventListener("mouseover", (event) => {
		li.classList.add("dropdown__hover");
	});
});

helpHovered.forEach((li) => {
	li.addEventListener("mouseleave", (event) => {
		li.classList.remove("dropdown__hover");
	});
});
const menuIconApple = document.querySelector("#menuAppleIcon");
const menuApple = document.querySelector("#menuApple");
const appleDropdown = document.querySelector("#appleDropdown");

menuApple.addEventListener("click", (event) => {
	appleDropdown.classList.toggle("dropdown__apple--hidden");
});

menuApple.addEventListener("mouseover", (event) => {
	appleDropdown.classList.remove("dropdown__apple--hidden");
});

const menuAppTitle = document.querySelector("#menuAppTitle");
const appDropdown = document.querySelector("#appDropdown");
menuAppTitle.addEventListener("click", (event) => {
	appDropdown.classList.toggle("dropdown__app--hidden");
});
menuAppTitle.addEventListener("mouseover", (event) => {
	appDropdown.classList.remove("dropdown__app--hidden");
});

const menuEdit = document.querySelector("#menuEdit");
const menuDropdown = document.querySelector("#menuDropdown");
menuEdit.addEventListener("click", (event) => {
	editDropdown.classList.toggle("dropdown__edit--hidden");
});

menuEdit.addEventListener("mouseover", (event) => {
	editDropdown.classList.remove("dropdown__edit--hidden");
});

const menuView = document.querySelector("#menuView");
const viewDropdown = document.querySelector("#viewDropdown");
menuView.addEventListener("click", (event) => {
	viewDropdown.classList.toggle("dropdown__view--hidden");
});
menuView.addEventListener("mouseover", (event) => {
	viewDropdown.classList.remove("dropdown__view--hidden");
});

const menuGo = document.querySelector("#menuGo");
const goDropdown = document.querySelector("#goDropdown");
menuGo.addEventListener("click", (event) => {
	goDropdown.classList.toggle("dropdown__go--hidden");
});

menuGo.addEventListener("mouseover", (event) => {
	goDropdown.classList.remove("dropdown__go--hidden");
});

const menuWindow = document.querySelector("#menuWindow");
const windowDropdown = document.querySelector("#windowDropdown");
menuWindow.addEventListener("click", (event) => {
	windowDropdown.classList.toggle("dropdown__window--hidden");
});

menuWindow.addEventListener("mouseover", (event) => {
	windowDropdown.classList.remove("dropdown__window--hidden");
});

const menuHelp = document.querySelector("#menuHelp");
const helpDropdown = document.querySelector("#helpDropdown");
menuHelp.addEventListener("click", (event) => {
	helpDropdown.classList.toggle("dropdown__help--hidden");
});

menuHelp.addEventListener("mouseover", (event) => {
	helpDropdown.classList.remove("dropdown__help--hidden");
});

const menuFile = document.querySelector("#menuFile");
const fileDropdown = document.querySelector("#fileDropdown");
menuFile.addEventListener("click", (event) => {
	fileDropdown.classList.toggle("dropdown__file--hidden");
});

menuFile.addEventListener("mouseover", (event) => {
	fileDropdown.classList.remove("dropdown__file--hidden");
});

window.addEventListener("click", (event) => {
	if (
		!menuAppTitle.contains(event.target) &&
		!appDropdown.contains(event.target)
	) {
		appDropdown.classList.add("dropdown__app--hidden");
	}
	if (
		!menuApple.contains(event.target) &&
		!appleDropdown.contains(event.target)
	) {
		appleDropdown.classList.add("dropdown__apple--hidden");
	}
	if (
		!menuFile.contains(event.target) &&
		!fileDropdown.contains(event.target)
	) {
		fileDropdown.classList.add("dropdown__file--hidden");
	}
	if (
		!menuEdit.contains(event.target) &&
		!editDropdown.contains(event.target)
	) {
		editDropdown.classList.add("dropdown__edit--hidden");
	}
	if (
		!menuView.contains(event.target) &&
		!viewDropdown.contains(event.target)
	) {
		viewDropdown.classList.add("dropdown__view--hidden");
	}
	if (!menuGo.contains(event.target) && !goDropdown.contains(event.target)) {
		goDropdown.classList.add("dropdown__go--hidden");
	}

	if (
		!menuWindow.contains(event.target) &&
		!windowDropdown.contains(event.target)
	) {
		windowDropdown.classList.add("dropdown__window--hidden");
	}

	if (
		!menuHelp.contains(event.target) &&
		!helpDropdown.contains(event.target)
	) {
		helpDropdown.classList.add("dropdown__help--hidden");
	}
});

const menu = document.querySelector("#menu");

window.addEventListener("mouseover", (event) => {
	if (
		!menuAppTitle.contains(event.target) &&
		!appDropdown.contains(event.target) &&
		menu.contains(event.target)
	) {
		appDropdown.classList.add("dropdown__app--hidden");
	}
	if (
		!menuFile.contains(event.target) &&
		!fileDropdown.contains(event.target) &&
		menu.contains(event.target)
	) {
		fileDropdown.classList.add("dropdown__file--hidden");
	}
	if (
		!menuEdit.contains(event.target) &&
		!editDropdown.contains(event.target) &&
		menu.contains(event.target)
	) {
		editDropdown.classList.add("dropdown__edit--hidden");
	}
	if (
		!menuView.contains(event.target) &&
		!viewDropdown.contains(event.target) &&
		menu.contains(event.target)
	) {
		viewDropdown.classList.add("dropdown__view--hidden");
	}
	if (
		!menuGo.contains(event.target) &&
		!goDropdown.contains(event.target) &&
		menu.contains(event.target)
	) {
		goDropdown.classList.add("dropdown__go--hidden");
	}

	if (
		!menuWindow.contains(event.target) &&
		!windowDropdown.contains(event.target) &&
		menu.contains(event.target)
	) {
		windowDropdown.classList.add("dropdown__window--hidden");
	}

	if (
		!menuHelp.contains(event.target) &&
		!helpDropdown.contains(event.target) &&
		menu.contains(event.target)
	) {
		helpDropdown.classList.add("dropdown__help--hidden");
	}
	if (
		!menuApple.contains(event.target) &&
		!appleDropdown.contains(event.target) &&
		menu.contains(event.target)
	) {
		appleDropdown.classList.add("dropdown__apple--hidden");
	}
});

// <---

// ---> Date and time -- to its own javascript file?
const dateAndTime = document.querySelector("#dateAndTime");
const date = new Date().toUTCString().slice(0, 11);
console.log(date);

const australiaDateAndTime = new Date().toLocaleString("en-US", {
	timeZone: "Australia/Sydney",
});

const australiaTime = australiaDateAndTime.slice(11, 16);
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
	calculator.classList.add("calculator--hidden");
	calculator.style.zIndex = "0";
});

openCalculator.addEventListener("click", (event) => {
	calculator.classList.remove("calculator--hidden");
	messages.style.zIndex = 1;
	notes.style.zIndex = 1;
	finder.style.zIndex = 1;
	calculator.style.zIndex = 2;
});

openNotes.addEventListener("click", (event) => {
	notes.classList.remove("notes--hidden");
	messages.style.zIndex = 1;
	finder.style.zIndex = 1;
	notes.style.zIndex = 2;
	calculator.style.zIndex = 1;
});
closeNotes.addEventListener("click", (event) => {
	notes.classList.add("notes--hidden");
	notes.style.zIndex = "0";
});

closeMessages.addEventListener("click", (event) => {
	messages.classList.add("messages--hidden");
	messages.style.zIndex = "0";
});

messagesDock.addEventListener("click", (event) => {
	messages.classList.remove("messages--hidden");
	finder.style.zIndex = 1;
	notes.style.zIndex = 1;
	calculator.style.zIndex = 1;
	messages.style.zIndex = 2;
});

const finderContent = document.querySelector("#finderContent");
const cats = finderContent.querySelectorAll("div.cats");
const cool = finderContent.querySelectorAll("div.cool");
const documents = finderContent.querySelectorAll("div.documents");
const bin = finderContent.querySelectorAll("div.bin");

catPicsIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Cat pics";
	cats.forEach((div) => {
		div.classList.remove("cats--hidden");
	});
	cool.forEach((div) => {
		div.classList.add("cool--hidden");
	});
	documents.forEach((div) => {
		div.classList.add("documents--hidden");
	});
	bin.forEach((div) => {
		div.classList.add("bin--hidden");
	});
	finder.style.zIndex = 2;
});

hdIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Macintosh HD";
	finder.style.zIndex = 2;
	cats.forEach((div) => {
		div.classList.add("cats--hidden");
	});
	cool.forEach((div) => {
		div.classList.add("cool--hidden");
	});
	documents.forEach((div) => {
		div.classList.add("documents--hidden");
	});
	bin.forEach((div) => {
		div.classList.add("bin--hidden");
	});
});

coolStuffIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Cool stuff";
	finder.style.zIndex = 2;
	cats.forEach((div) => {
		div.classList.add("cats--hidden");
	});
	cool.forEach((div) => {
		div.classList.remove("cool--hidden");
	});
	documents.forEach((div) => {
		div.classList.add("documents--hidden");
	});
	bin.forEach((div) => {
		div.classList.add("bin--hidden");
	});
});

documentsIcon.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Documents";
	finder.style.zIndex = 2;
	cats.forEach((div) => {
		div.classList.add("cats--hidden");
	});
	cool.forEach((div) => {
		div.classList.add("cool--hidden");
	});
	documents.forEach((div) => {
		div.classList.remove("documents--hidden");
	});
	bin.forEach((div) => {
		div.classList.add("bin--hidden");
	});
});

openDownloads.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Downloads";
	finder.style.zIndex = 2;
	cats.forEach((div) => {
		div.classList.add("cats--hidden");
	});
	cool.forEach((div) => {
		div.classList.add("cool--hidden");
	});
	documents.forEach((div) => {
		div.classList.add("documents--hidden");
	});
	bin.forEach((div) => {
		div.classList.add("bin--hidden");
	});
});

openBin.addEventListener("click", (event) => {
	finder.style.display = "flex";
	finderHeaderText.innerHTML = "Bin";
	finder.style.zIndex = 2;
	cats.forEach((div) => {
		div.classList.add("cats--hidden");
	});
	cool.forEach((div) => {
		div.classList.add("cool--hidden");
	});
	documents.forEach((div) => {
		div.classList.add("documents--hidden");
	});
	bin.forEach((div) => {
		div.classList.remove("bin--hidden");
	});
});
