const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 3000);
});

const table = document.getElementById("output");

// Add loading row before promises resolve
const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
const loadingTd = document.createElement("td");
loadingTd.colSpan = 2;
loadingTd.textContent = "Loading...";
loadingRow.appendChild(loadingTd);
table.appendChild(loadingRow);

const startTime = Date.now();

Promise.all([p1, p2, p3]).then((val) => {
  // Remove the loading row
  const trLoading = document.getElementById("loading");
  if (trLoading) trLoading.remove();

  val.forEach((element, index) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = element;
    const td2 = document.createElement("td");

    // Match delays with respective values
    if (element === "Promise 1") td2.textContent = "2";
    else if (element === "Promise 2") td2.textContent = "1";
    else td2.textContent = "3";

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  });

  const endTime = Date.now();
  let time = ((endTime - startTime) / 1000).toFixed(3);

  const tr2 = document.createElement("tr");
  const tdTotal1 = document.createElement("td");
  tdTotal1.textContent = "Total";
  const tdTotal2 = document.createElement("td");
  tdTotal2.textContent = time;

  tr2.appendChild(tdTotal1);
  tr2.appendChild(tdTotal2);
  table.appendChild(tr2);
});
