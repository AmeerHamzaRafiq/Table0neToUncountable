function generateTable() {
  // <input type="number" placeholder="Enter number" id="num">ye input hai.
  const num = document.getElementById("num").value;

  // <h3 id="table-container"></h3> ye output hai.
  const tableContainer = document.getElementById("table-container");

  // <h3 id="table-container"></h3> is ke under jab user botton pr click ker ga tu value ajay gi table ki ji wo likhe ga.
  tableContainer.innerHTML = "<h1>";

  // Ye table ka formula hai jis ki inicial value 1 ho ti hai or 10 bar value read kare ga phir i++ means is se 1 me 1+ kr raha hai or jab user koi bhi value put ker ga tu wo is number se multiply ho jay ga
  for (let i = 1; i <= 10; i++) {
    tableContainer.innerHTML += `${num} x ${i} = ${num * i} <br><hr>`;
  }

  // <h3 id="table-container"></h3> is ke under jab user botton pr click ker ga tu value change ho gi table ki ji wo bar bar type kare ga.
  tableContainer.innerHTML += "</h1>";
  const h3 = document.querySelector("h3");
}

// ye clear ka function hai jis ki inicial value desh means khali hai
function clears() {
  h3.innerHTML = "";
}

const h3 = document.querySelector("h3");
