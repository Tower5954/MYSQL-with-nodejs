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
	var sql = "ALTER TABLE customers  ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY" 
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Our Table has been Altered...");
	});
	
	
});