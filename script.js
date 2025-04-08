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

  val.forEach((element, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = element;
    let td2 = document.createElement("td");
    if(index === 0){
      td2.textContent = "2";
    }
    else if(index === 1){
      td2.textContent = "1";
    }
    else{
      td2.textContent = "3";
    }

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  });

  const endTime = Date.now();

  let time = (endTime-startTime)/1000;
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