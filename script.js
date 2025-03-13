const parent = document.getElementById("parent");
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const chevyRow = document.createElement("tr");
const pontiacRow = document.createElement("tr");
const carHeader = document.createElement("td");
const speedHeader = document.createElement("td");
const priceHeader = document.createElement("td");
const chevyCell = document.createElement("td");
const chevySpeed = document.createElement("td");
const chevyPrice = document.createElement("td");
const pontiacCell = document.createElement("td");
const pontiacSpeed = document.createElement("td");
const pontiacPrice = document.createElement("td");

// First Row
parent.appendChild(table);
table.appendChild(headerRow);
headerRow.appendChild(carHeader);
headerRow.appendChild(speedHeader);
headerRow.appendChild(priceHeader);
carHeader.innerHTML = "Car";
speedHeader.innerHTML = "Top Speed";
priceHeader.innerHTML = "Price";

// Second Row
table.appendChild(chevyRow);
chevyRow.appendChild(chevyCell);
chevyRow.appendChild(chevySpeed);
chevyRow.appendChild(chevyPrice);
chevyCell.innerHTML = "Chevrolet";
chevySpeed.innerHTML = "120 MPH";
chevyPrice.innerHTML = "$10,000";

// Third Row
table.appendChild(pontiacRow);
pontiacRow.appendChild(pontiacCell);
pontiacRow.appendChild(pontiacSpeed);
pontiacRow.appendChild(pontiacPrice);
pontiacCell.innerHTML = "Pontiac";
pontiacSpeed.innerHTML = "140 MPH";
pontiacPrice.innerHTML = "$20,000";

// Styling the table
table.style.border = "2px solid red"; // Red border
table.style.borderCollapse = "collapse"; // Merge borders
table.style.width = "70%"; // Set width
table.style.margin = "30px auto"; // Center table
table.style.borderRadius = "10px"; // Round corners

// Adding attributes to the table
table.setAttribute("cellpadding", "12"); // Cell padding
table.setAttribute("cellspacing", "6"); // Cell spacing

// Header styling
headerRow.style.backgroundColor = "#FF0000"; // Red background
headerRow.style.color = "white"; // White text
headerRow.style.fontWeight = "bold"; // Bold text

// Background colors
chevyRow.style.backgroundColor = "#FFFFFF"; // White for Chevrolet
pontiacRow.style.backgroundColor = "#0000FF"; // Blue for Pontiac















//AMERICA
