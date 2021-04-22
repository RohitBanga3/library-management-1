let issueHead = document.getElementById("issueHead");
let holdHead = document.getElementById("holdHead");
let fineHead = document.getElementById("fineHead");
let recommendHead = document.getElementById("recommendHead");
let issuedBooks = document.getElementById("issuedBooks");
let holdBooks = document.getElementById("holdBooks");
let recommendBooks = document.getElementById("recommendBooks");
let fine = document.getElementById("fine");

issueHead.onclick = () => {
	holdHead.classList.add("passivebackground");
	fineHead.classList.add("passivebackground");
	issueHead.classList.remove("passivebackground");
	recommendHead.classList.add("passivebackground");
	issuedBooks.classList.remove("d-none");
	holdBooks.classList.add("d-none");
	recommendBooks.classList.add("d-none");
	fine.classList.add("d-none");
};

holdHead.onclick = () => {
	holdHead.classList.remove("passivebackground");
	fineHead.classList.add("passivebackground");
	issueHead.classList.add("passivebackground");
	issuedBooks.classList.add("d-none");
	holdBooks.classList.remove("d-none");
	fine.classList.add("d-none");
	recommendBooks.classList.add("d-none");
	recommendHead.classList.add("passivebackground");
};

recommendHead.onclick = () => {
	holdHead.classList.add("passivebackground");
	fineHead.classList.add("passivebackground");
	issueHead.classList.add("passivebackground");
	issuedBooks.classList.add("d-none");
	holdBooks.classList.add("d-none");
	fine.classList.add("d-none");
	recommendBooks.classList.remove("d-none");
	recommendHead.classList.remove("passivebackground");
};

fineHead.onclick = () => {
	holdHead.classList.add("passivebackground");
	fineHead.classList.remove("passivebackground");
	issueHead.classList.add("passivebackground");
	issuedBooks.classList.add("d-none");
	holdBooks.classList.add("d-none");
	fine.classList.remove("d-none");
	recommendBooks.classList.add("d-none");
	recommendHead.classList.add("passivebackground");
};
