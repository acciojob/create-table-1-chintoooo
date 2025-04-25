function insert_Row() {
    //Write your code here
  function insert_Row() {
  // Get the table by ID
  var table = document.getElementById("sampleTable");

  // Insert a new row at index 0 (top of the table)
  var newRow = table.insertRow(0);

  // Insert two cells into the new row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  // Set the text for the new cells
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}

  
}
