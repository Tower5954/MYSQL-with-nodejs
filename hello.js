var mysql = require('mysql');

// Create a connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",

})


// Connect to MySql
con.connect(function(err){
	if (err) throw err;
	console.log("Connected to the Database");
	con.query("CREATE DATABASE nodeDB", function (err, result) {
		if (err) throw err;
		console.log("Database Created");
	})
});