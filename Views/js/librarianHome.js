let issueHead = document.getElementById("issueHead");
let returnHead = document.getElementById("returnHead");
let addBookHead = document.getElementById("addBookHead");
let deleteBookHead = document.getElementById("deleteBookHead");
let addUserHead = document.getElementById("addUserHead");
let addAuthorHead = document.getElementById("addAuthorHead");
let isuueSection = document.getElementById("issueSection");
let returnSection = document.getElementById("returnSection");
let addBookSection = document.getElementById("addBookSection");
let deleteBookSection = document.getElementById("deleteBookSection");
let addUserSection = document.getElementById("addUserSection");
let addAuthorSection = document.getElementById("addAuthorSection");
let fineSection = document.getElementById("fineSection");
let fineHead = document.getElementById("fineHead");
let authorHead = document.getElementById("authorHead");
let authorSection = document.getElementById("authorSection");

issueHead.onclick = () => {
	issueHead.classList.remove("passivebackground");
	isuueSection.classList.remove("d-none");
	isuueSection.classList.add("d-flex");

	returnHead.classList.add("passivebackground");
	returnSection.classList.add("d-none");
	returnSection.classList.remove("d-flex");

	addBookHead.classList.add("passivebackground");
	addBookSection.classList.add("d-none");
	addBookSection.classList.remove("d-flex");

	deleteBookHead.classList.add("passivebackground");
	deleteBookSection.classList.add("d-none");
	deleteBookSection.classList.remove("d-flex");

	addUserHead.classList.add("passivebackground");
	addUserSection.classList.add("d-none");
	addUserSection.classList.remove("d-flex");

	addAuthorHead.classList.add("passivebackground");
	addAuthorSection.classList.add("d-none");
	addAuthorSection.classList.remove("d-flex");

	fineHead.classList.add("passivebackground");
	fineSection.classList.add("d-none");
	fineSection.classList.remove("d-flex");

	authorHead.classList.add("passivebackground");
	authorSection.classList.add("d-none");
	authorSection.classList.remove("d-flex");
};

returnHead.onclick = () => {
	issueHead.classList.add("passivebackground");
	isuueSection.classList.add("d-none");
	isuueSection.classList.remove("d-flex");

	returnHead.classList.remove("passivebackground");
	returnSection.classList.remove("d-none");
	returnSection.classList.add("d-flex");

	addBookHead.classList.add("passivebackground");
	addBookSection.classList.add("d-none");
	addBookSection.classList.remove("d-flex");

	deleteBookHead.classList.add("passivebackground");
	deleteBookSection.classList.add("d-none");
	deleteBookSection.classList.remove("d-flex");

	addUserHead.classList.add("passivebackground");
	addUserSection.classList.add("d-none");
	addUserSection.classList.remove("d-flex");

	addAuthorHead.classList.add("passivebackground");
	addAuthorSection.classList.add("d-none");
	addAuthorSection.classList.remove("d-flex");

	fineHead.classList.add("passivebackground");
	fineSection.classList.add("d-none");
	fineSection.classList.remove("d-flex");

	authorHead.classList.add("passivebackground");
	authorSection.classList.add("d-none");
	authorSection.classList.remove("d-flex");
};

addBookHead.onclick = () => {
	issueHead.classList.add("passivebackground");
	isuueSection.classList.add("d-none");
	isuueSection.classList.remove("d-flex");

	returnHead.classList.add("passivebackground");
	returnSection.classList.add("d-none");
	returnSection.classList.remove("d-flex");

	addBookHead.classList.remove("passivebackground");
	addBookSection.classList.remove("d-none");
	addBookSection.classList.add("d-flex");

	deleteBookHead.classList.add("passivebackground");
	deleteBookSection.classList.add("d-none");
	deleteBookSection.classList.remove("d-flex");

	addUserHead.classList.add("passivebackground");
	addUserSection.classList.add("d-none");
	addUserSection.classList.remove("d-flex");

	addAuthorHead.classList.add("passivebackground");
	addAuthorSection.classList.add("d-none");
	addAuthorSection.classList.remove("d-flex");

	fineHead.classList.add("passivebackground");
	fineSection.classList.add("d-none");
	fineSection.classList.remove("d-flex");

	authorHead.classList.add("passivebackground");
	authorSection.classList.add("d-none");
	authorSection.classList.remove("d-flex");
};

deleteBookHead.onclick = () => {
	issueHead.classList.add("passivebackground");
	isuueSection.classList.add("d-none");
	isuueSection.classList.remove("d-flex");

	returnHead.classList.add("passivebackground");
	returnSection.classList.add("d-none");
	returnSection.classList.remove("d-flex");

	addBookHead.classList.add("passivebackground");
	addBookSection.classList.add("d-none");
	addBookSection.classList.remove("d-flex");

	deleteBookHead.classList.remove("passivebackground");
	deleteBookSection.classList.remove("d-none");
	deleteBookSection.classList.add("d-flex");

	addUserHead.classList.add("passivebackground");
	addUserSection.classList.add("d-none");
	addUserSection.classList.remove("d-flex");

	addAuthorHead.classList.add("passivebackground");
	addAuthorSection.classList.add("d-none");
	addAuthorSection.classList.remove("d-flex");

	fineHead.classList.add("passivebackground");
	fineSection.classList.add("d-none");
	fineSection.classList.remove("d-flex");

	authorHead.classList.add("passivebackground");
	authorSection.classList.add("d-none");
	authorSection.classList.remove("d-flex");
};

addUserHead.onclick = () => {
	issueHead.classList.add("passivebackground");
	isuueSection.classList.add("d-none");
	isuueSection.classList.remove("d-flex");

	returnHead.classList.add("passivebackground");
	returnSection.classList.add("d-none");
	returnSection.classList.remove("d-flex");

	addBookHead.classList.add("passivebackground");
	addBookSection.classList.add("d-none");
	addBookSection.classList.remove("d-flex");

	deleteBookHead.classList.add("passivebackground");
	deleteBookSection.classList.add("d-none");
	deleteBookSection.classList.remove("d-flex");

	addUserHead.classList.remove("passivebackground");
	addUserSection.classList.remove("d-none");
	addUserSection.classList.add("d-flex");

	addAuthorHead.classList.add("passivebackground");
	addAuthorSection.classList.add("d-none");
	addAuthorSection.classList.remove("d-flex");

	fineHead.classList.add("passivebackground");
	fineSection.classList.add("d-none");
	fineSection.classList.remove("d-flex");

	authorHead.classList.add("passivebackground");
	authorSection.classList.add("d-none");
	authorSection.classList.remove("d-flex");
};

addAuthorHead.onclick = () => {
	issueHead.classList.add("passivebackground");
	isuueSection.classList.add("d-none");
	isuueSection.classList.remove("d-flex");

	returnHead.classList.add("passivebackground");
	returnSection.classList.add("d-none");
	returnSection.classList.remove("d-flex");

	addBookHead.classList.add("passivebackground");
	addBookSection.classList.add("d-none");
	addBookSection.classList.remove("d-flex");

	deleteBookHead.classList.add("passivebackground");
	deleteBookSection.classList.add("d-none");
	deleteBookSection.classList.remove("d-flex");

	addAuthorHead.classList.remove("passivebackground");
	addAuthorSection.classList.remove("d-none");
	addAuthorSection.classList.add("d-flex");

	addUserHead.classList.add("passivebackground");
	addUserSection.classList.add("d-none");
	addUserSection.classList.remove("d-flex");

	fineHead.classList.add("passivebackground");
	fineSection.classList.add("d-none");
	fineSection.classList.remove("d-flex");

	authorHead.classList.add("passivebackground");
	authorSection.classList.add("d-none");
	authorSection.classList.remove("d-flex");
};

fineHead.onclick = () => {
	issueHead.classList.add("passivebackground");
	isuueSection.classList.add("d-none");
	isuueSection.classList.remove("d-flex");

	returnHead.classList.add("passivebackground");
	returnSection.classList.add("d-none");
	returnSection.classList.remove("d-flex");

	addBookHead.classList.add("passivebackground");
	addBookSection.classList.add("d-none");
	addBookSection.classList.remove("d-flex");

	deleteBookHead.classList.add("passivebackground");
	deleteBookSection.classList.add("d-none");
	deleteBookSection.classList.remove("d-flex");

	addUserHead.classList.add("passivebackground");
	addUserSection.classList.add("d-none");
	addUserSection.classList.remove("d-flex");

	addAuthorHead.classList.add("passivebackground");
	addAuthorSection.classList.add("d-none");
	addAuthorSection.classList.remove("d-flex");

	fineHead.classList.remove("passivebackground");
	fineSection.classList.remove("d-none");
	fineSection.classList.add("d-flex");

	authorHead.classList.add("passivebackground");
	authorSection.classList.add("d-none");
	authorSection.classList.remove("d-flex");
};

authorHead.onclick = () => {
	issueHead.classList.add("passivebackground");
	isuueSection.classList.add("d-none");
	isuueSection.classList.remove("d-flex");

	returnHead.classList.add("passivebackground");
	returnSection.classList.add("d-none");
	returnSection.classList.remove("d-flex");

	addBookHead.classList.add("passivebackground");
	addBookSection.classList.add("d-none");
	addBookSection.classList.remove("d-flex");

	deleteBookHead.classList.add("passivebackground");
	deleteBookSection.classList.add("d-none");
	deleteBookSection.classList.remove("d-flex");

	addUserHead.classList.add("passivebackground");
	addUserSection.classList.add("d-none");
	addUserSection.classList.remove("d-flex");

	addAuthorHead.classList.add("passivebackground");
	addAuthorSection.classList.add("d-none");
	addAuthorSection.classList.remove("d-flex");

	fineHead.classList.add("passivebackground");
	fineSection.classList.add("d-none");
	fineSection.classList.remove("d-flex");

	authorHead.classList.remove("passivebackground");
	authorSection.classList.remove("d-none");
	authorSection.classList.add("d-flex");
};

let issueForm = document.getElementById("issueForm");
let bookIdIssue = document.getElementById("bookIdIssue");
let userIdIssue = document.getElementById("userIdIssue");
let errorIssue = document.getElementById("errorIssue");
let successIssue = document.getElementById("successIssue");

bookIdIssue.onchange = () => {
	errorIssue.textContent = "";
	successIssue.textContent = "";
};

userIdIssue.onchange = () => {
	errorIssue.textContent = "";
	successIssue.textContent = "";
};

issueForm.onsubmit = () => {
	let body = {
		book_id: bookIdIssue.value,
		user_id: userIdIssue.value,
	};

	let url = "/librarian/issueBook";

	fetch(url, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		redirect: "follow",
	})
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			bookIdIssue.value = "";
			userIdIssue.value = "";
			errorIssue.textContent = response.error;
			successIssue.textContent = response.success;
		})
		.catch((error) => {
			console.log(error);
		});

	return false;
};

let addBookForm = document.getElementById("addBookForm");
let bookISBNAdd = document.getElementById("bookISBNAdd");
let bookTitleAdd = document.getElementById("bookTitleAdd");
let bookcopyAdd = document.getElementById("bookcopyAdd");
let bookshelfAdd = document.getElementById("bookshelfAdd");
let bookrowAdd = document.getElementById("bookrowAdd");
let bookauthorAdd = document.getElementById("bookauthorAdd");
let errorBookAdd = document.getElementById("errorBookAdd");
let successBookAdd = document.getElementById("successBookAdd");

console.log(errorBookAdd);

bookISBNAdd.onchange = () => {
	errorBookAdd.textContent = "";
	successBookAdd.textContent = "";
};

bookTitleAdd.onchange = () => {
	errorBookAdd.textContent = "";
	successBookAdd.textContent = "";
};

bookcopyAdd.onchange = () => {
	errorBookAdd.textContent = "";
	successBookAdd.textContent = "";
};

bookshelfAdd.onchange = () => {
	errorBookAdd.textContent = "";
	successBookAdd.textContent = "";
};

bookrowAdd.onchange = () => {
	errorBookAdd.textContent = "";
	successBookAdd.textContent = "";
};

bookauthorAdd.onchange = () => {
	errorBookAdd.textContent = "";
	successBookAdd.textContent = "";
};

addBookForm.onsubmit = () => {
	let body = {
		ISBN: bookISBNAdd.value,
		title: bookTitleAdd.value,
		copy_number: bookcopyAdd.value,
		shelf_id: bookshelfAdd.value,
		row_number: bookrowAdd.value,
		author_id: bookauthorAdd.value,
	};

	let url = "/librarian/addBook";

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		redirect: "follow",
	})
		.then((response) => response.json())
		.then((response) => {
			//console.log(response.error);
			bookISBNAdd.value = "";
			bookTitleAdd.value = "";
			bookcopyAdd.value = "";
			bookshelfAdd.value = "";
			bookrowAdd.value = "";
			bookauthorAdd.value = "";
			errorBookAdd.textContent = response.error;
			successBookAdd.textContent = response.success;
		})
		.catch((error) => {
			console.log(error);
		});
	return false;
};

let deleteBookForm = document.getElementById("deleteBookForm");
let bookIdDelete = document.getElementById("bookIdDelete");
let errorDelete = document.getElementById("errorDelete");
let successDelete = document.getElementById("successDelete");

bookIdDelete.onchange = () => {
	errorDelete.textContent = "";
	successDelete.textContent = "";
};

deleteBookForm.onsubmit = () => {
	let body = {
		book_id: bookIdDelete.value,
	};

	let url = "/librarian/deleteBook";

	fetch(url, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		redirect: "follow",
	})
		.then((response) => response.json())
		.then((response) => {
			bookIdDelete.value = "";
			errorDelete.textContent = response.error;
			successDelete.textContent = response.success;
		})
		.catch((error) => {
			console.log(error);
		});

	return false;
};

let returnForm = document.getElementById("returnForm");
let bookIdReturn = document.getElementById("bookIdReturn");
let errorReturn = document.getElementById("errorReturn");
let successReturn = document.getElementById("successReturn");

bookIdReturn.onchange = () => {
	errorReturn.textContent = "";
	successReturn.textContent = "";
};

returnForm.onsubmit = () => {
	let body = {
		book_id: bookIdReturn.value,
	};

	let url = "/librarian/returnBook";

	fetch(url, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		redirect: "follow",
	})
		.then((response) => response.json())
		.then((response) => {
			bookIdReturn.value = "";
			errorReturn.textContent = response.error;
			successReturn.textContent = response.success;
		})
		.catch((error) => {
			console.log(error);
		});

	return false;
};

let addUserForm = document.getElementById("addUserForm");
let userIdAdd = document.getElementById("userIdAdd");
let nameAdd = document.getElementById("nameAdd");
let emailAdd = document.getElementById("emailAdd");
let passwordAdd = document.getElementById("passwordAdd");
let studentAdd = document.getElementById("studentAdd");
let phoneAdd = document.getElementById("phoneAdd");
let addressAdd = document.getElementById("addressAdd");
let errorAddUser = document.getElementById("errorAddUser");
let successAddUser = document.getElementById("successAddUser");

userIdAdd.onchange = () => {
	errorAddUser.textContent = "";
	successAddUser.textContent = "";
};

nameAdd.onchange = () => {
	errorAddUser.textContent = "";
	successAddUser.textContent = "";
};

emailAdd.onchange = () => {
	errorAddUser.textContent = "";
	successAddUser.textContent = "";
};

passwordAdd.onchange = () => {
	errorAddUser.textContent = "";
	successAddUser.textContent = "";
};

studentAdd.onchange = () => {
	errorAddUser.textContent = "";
	successAddUser.textContent = "";
};

phoneAdd.onchange = () => {
	errorAddUser.textContent = "";
	successAddUser.textContent = "";
};
addressAdd.onchange = () => {
	errorAddUser.textContent = "";
	successAddUser.textContent = "";
};

addUserForm.onsubmit = () => {
	let body = {
		email: emailAdd.value,
		password: passwordAdd.value,
		name: nameAdd.value,
		user_id: userIdAdd.value,
		phone_number: phoneAdd.value,
		address: addressAdd.value,
		student: studentAdd.value,
	};

	let url = "/librarian/addUser";

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		redirect: "follow",
	})
		.then((response) => response.json())
		.then((response) => {
			emailAdd.value = "";
			passwordAdd.value = "";
			nameAdd.value = "";
			userIdAdd.value = "";
			phoneAdd.value = "";
			addressAdd.value = "";
			studentAdd.value = "";
			errorAddUser.textContent = response.error;
			successAddUser.textContent = response.success;
		})
		.catch((error) => {
			console.log(error);
		});

	return false;
};

let addAuthorForm = document.getElementById("addAuthorForm");
let authorNameAdd = document.getElementById("authorNameAdd");
let errorAddAuthor = document.getElementById("errorAddAuthor");
let successAddAuthor = document.getElementById("successAddAuthor");

authorNameAdd.onchange = () => {
	errorAddAuthor.textContent = "";
	successAddAuthor.textContent = "";
};

addAuthorForm.onsubmit = () => {
	let body = {
		name: authorNameAdd.value,
	};

	let url = "/librarian/addAuthor";

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		redirect: "follow",
	})
		.then((response) => response.json())
		.then((response) => {
			authorNameAdd.value = "";
			errorAddAuthor.textContent = response.error;
			successAddAuthor.textContent = response.success;
		})
		.catch((error) => {
			console.log(error);
		});

	return false;
};

let checkfineForm = document.getElementById("checkfineForm");
let userIdFine = document.getElementById("userIdFine");
let errorFine = document.getElementById("errorFine");
let successFine = document.getElementById("successFine");
let clearfineForm = document.getElementById("clearfineForm");

userIdFine.onchange = () => {
	errorFine.textContent = "";
	successFine.textContent = "";
};

checkfineForm.onsubmit = () => {
	let url = "/librarian/checkfine?user_id=" + userIdFine.value;

	fetch(url)
		.then((response) => response.json())
		.then((response) => {
			errorFine.textContent = "The total fine is " + response.error + " rupees";
			successFine.textContent = response.success;
		})
		.catch((error) => {
			console.log(error);
		});

	return false;
};

clearfineForm.onsubmit = () => {
	let body = {
		user_id: userIdFine.value,
	};
	let url = "/librarian/clearfine";

	fetch(url, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		redirect: "follow",
	})
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			errorFine.textContent = response.error;
		})
		.catch((error) => {
			console.log(error);
		});
	return false;
};
