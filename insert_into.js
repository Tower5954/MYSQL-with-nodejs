var mysql = require('mysql');

// Create a connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodedb",

})


// Connect to MySql
con.connect(function(err){
	if (err) throw err;
	console.log("Connected to the Database");
	
	// Alter Table
	var sql = "INSERT INTO customers (name, email) VALUES ('Mary Smith', 'msmithy196@gmail.com')"; 
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Data inserted into table...");
	});
});