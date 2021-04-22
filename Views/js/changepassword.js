let passwordform = document.getElementById("passwordform");
let oldpassword = document.getElementById("oldpassword");
let newpassword = document.getElementById("newpassword");
let error = document.getElementById("error");
let success = document.getElementById("success");
console.log(newpassword);

oldpassword.onchange = () => {
	error.textContent = "";
	success.textContent = "";
};

newpassword.onchange = () => {
	error.textContent = "";
	success.textContent = "";
};

passwordform.onsubmit = () => {
	console.log(newpassword.value);
	let body = {
		old_password: oldpassword.value,
		new_password: newpassword.value,
	};

	let url = "./changepassword";

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
			console.log(response);
			error.textContent = response.error;
			success.textContent = response.success;
			if (response.redirected) {
				window.location.href = response.url;
			}
		})
		.catch((error) => {
			console.log(error);
		});

	return false;
	//event.preventDefault();
};
