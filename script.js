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

const startTime = Date.now();

Promise.all([p1, p2, p3]).then((val) => {
  let table = document.getElementById("output");
  let tr1 = document.getElementById("before");
  tr1.classList.add("hidden");

  // console.log(val[0], val[1], val[2]);
  let resolvedTimes = [];
	
  val.forEach((element, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = element;
    let td2 = document.createElement("td");
    td2.textContent = (index + 1).toString();

	resolvedTimes.push(parseFloat(td2.textContent));

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  });

  let time = Math.max(...resolvedTimes);
  time = time.toFixed(3);

  // console.log(time);

  let tr2 = document.createElement("tr");
  let tdTotal1 = document.createElement("td");
  tdTotal1.textContent = "Total";
  let tdTotal2 = document.createElement("td");
  tdTotal2.textContent = time;

  tr2.appendChild(tdTotal1);
  tr2.appendChild(tdTotal2);
  table.appendChild(tr2);
  

});