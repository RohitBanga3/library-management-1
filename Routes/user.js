const router = require("express").Router();
const db = require("../services/db");
const keys = require("../config/keys");
const bcrypt = require("bcrypt");

function checkLoginUser(req, res) {
	if (req.session.userKey != keys.userKey) {
		res.render("../auth/logout");
		return false;
	}
	return true;
}

function checkError(error, res) {
	if (error) {
		console.log({ success: false, message: "database error", err: error });
		res.send({ success: false, message: "database error", err: error });
	}
}

router.get("/", (req, res) => {
	if (checkLoginUser(req, res)) {
		let issuedBooks,
			holdBooks,
			total_fine = 0;

		let query =
			"SELECT * FROM (book INNER JOIN author ON book.author_id = author.author_id) WHERE borrowed_id = " +
			req.session.user_id;

		db.query(query, (error, result) => {
			checkError(error, res);

			issuedBooks = result;

			let query =
				"SELECT * FROM (book INNER JOIN author ON book.author_id = author.author_id) WHERE holder_id = " +
				req.session.user_id;

			db.query(query, (error, result) => {
				checkError(error, res);

				holdBooks = result;

				let query =
					"SELECT SUM(fine_amount) AS total_fine FROM fine WHERE user_id =" +
					req.session.user_id +
					" GROUP BY user_id";

				db.query(query, (error, result) => {
					checkError(error, res);

					if (result.length > 0) {
						total_fine = result[0].total_fine;
					}
					//console.log(holdBooks);
					res.render("userHome.ejs", {
						issuedBooks: issuedBooks,
						holdBooks: holdBooks,
						total_fine: total_fine,
					});
				});
			});
		});
	}
});

router.put("/holdBook", (req, res) => {
	if (checkLoginUser(req, res)) {
		let query =
			"SELECT holder_id,book_id FROM book WHERE book_id = " +
			req.body.ISBN +
			" AND holder_id IS NULL";

		let on_hold;

		db.query(query, (error, results) => {
			checkError(error, res);
			on_hold = results.length == 0;

			if (on_hold) {
				res.json({
					error: "book not available for hold"
				});
				res.end();
			} else {
				console.log(results);
				let book_id = results[0].book_id;
				query = "UPDATE book SET ? WHERE book_id = " + book_id;
				let post = {
					holder_id: req.session.user_id,
					hold_date: new Date(),
					status: "on hold",
				};

				db.query(query, post, (err, result) => {
					checkError(err, res);
					res.json({
						error:"book is successfully on hold"
					})
					res.end();
				});
			}
		});
	}
});

router.get("/searchBook", (req, res) => {
	checkLoginUser(req, res);
	var criterion = req.query.criterion;
	var keyword = req.query.keyword;

	if (criterion == "name") {
		let query =
			"SELECT * FROM (book INNER JOIN author ON book.author_id = author.author_id) WHERE title LIKE '%" +
			keyword +
			"%' GROUP BY book.ISBN";

			console.log(query);

		db.query(query, (error, result) => {
			checkError(error, res);
			console.log(result);

			res.render("booksearch.ejs", {
				books: result,
			});
		});
	} else if (criterion == "ISBN") {
		let query =
			"SELECT * FROM (book INNER JOIN author ON book.author_id = author.author_id) WHERE book.ISBN LIKE '%" +
			keyword +
			"%' GROUP BY book.ISBN";

		db.query(query, (error, result) => {
			checkError(error, res);
			console.log(result);
			res.render("book.ejs", {
				books: result,
			});
		});
	} else if (criterion == "author") {
		let query =
			"SELECT * FROM (book INNER JOIN author ON book.author_id = author.author_id) WHERE EXISTS (SELECT author_id FROM author WHERE author.author_id = book.author_id AND author.name LIKE '%" +
			keyword +
			"%') GROUP BY book.ISBN";

		db.query(query, (error, result) => {
			checkError(error, res);

			res.render("booksearch.ejs", {
				books: result,
			});
		});
	}
});

router.get("/changePassword", (req, res) => {
	if (checkLoginUser(req, res)) {
		res.render("changepassword.ejs");
	}
});

router.put("/changePassword", (req, res) => {
	checkLoginUser(req, res);

	let old_password = req.body.old_password;
	let new_password = req.body.new_password;

	let query = "SELECT password FROM user WHERE user_id = " + req.session.user_id;

	let old_password_db;

	db.query(query, (err, result) => {
		checkError(err, res);

		old_password_db = result[0].password;

		bcrypt
			.compare(old_password, old_password_db)
			.then((same_old) => {
				console.log(same_old);
				if (!same_old) {
					//console.log("lokesh1");
					res.json({
						error: "old password doesn't match",
						success: "",
					});
					res.end();
				} else {
					let encryptedPassword;
					query = "UPDATE user SET ?";

					console.log(new_password);

					bcrypt
						.hash(new_password, keys.saltRounds)
						.then((password) => {
							encryptedPassword = password;
							let post = {
								password: encryptedPassword,
							};

							db.query(query, post, (err, result) => {
								checkError(err, res);
								console.log("lokesh");
								res.json({
									success: "password successfully changed",
									error: "",
								});
								res.end();
							});
						})
						.catch((error) => {
							console.log(error);
							res.render("error.ejs", {
								message: "internal error",
								error: error,
								success: "",
							});
						});
				}
			})
			.catch((error) => {
				console.log(error);
				res.render("error.ejs", {
					message: "database error",
					error: error,
					success: "",
				});
			});
	});
});

module.exports = router;
