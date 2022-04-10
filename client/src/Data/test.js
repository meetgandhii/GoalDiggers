import Adult_Abdominal_Pain from "./Adult_Abdominal_Pain_Full.csv";

// Parse CSV string

var data = Papa.parse(csv);

// Convert back to CSV
var csv = Papa.unparse(data);

// Parse local CSV file
Papa.parse(file, {
	complete: function(results) {
		console.log("Finished:", results.data);
	}
});

// Stream big file in worker thread
Papa.parse(bigFile, {
	worker: true,
	step: function(results) {
		console.log("Row:", results.data);
	}
});