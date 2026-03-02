let count = 0;
let total = 0;
let countEl = document.getElementById("count-el");

function increment() {
   count++;
   countEl.textContent = count;
   console.log(count);
}

function decrement() {
   if (count > 0) {
      count--;
      countEl.textContent = count;
   }
}

let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");

function save() {
   if (count != 0) {
      let date = new Date().toLocaleTimeString();
      console.log(date);

      let span = document.createElement("li");
      span.textContent = date + " = " + count;
      saveEl.appendChild(span);

      total += count;
      totalEl.textContent = total;
      countEl.textContent = 0;
      count = 0;
   }
}

function reset() {
   saveEl.textContent = "";
   totalEl.textContent = "";
   countEl.textContent = 0;
   count = 0;
   total = 0;
}
