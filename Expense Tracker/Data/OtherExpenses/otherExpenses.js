const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get("user");
const category = urlParams.get("category");

let data = JSON.parse(localStorage.getItem(user));

const categoryData = data.expense.other;


let placeholder = document.querySelector("#data-output");
let out = "";
for(let product of categoryData){
   out += `
      <tr>
         <td>${product.time}</td>
         <td>${product.amount}</td>
      </tr>
   `;
}

placeholder.innerHTML = out;

let groceryExpense=0;
let entertainmentExpense=0;
let billsExpense=0;
let otherExpenses=0;
data.expense.grocery.forEach(element => {
    groceryExpense += parseInt(element.amount);
});
data.expense.entertainment.forEach(element => {
    entertainmentExpense += parseInt(element.amount);
  });
  data.expense.bills.forEach(element => {
    billsExpense += parseInt(element.amount);
  });
  data.expense.other.forEach(element => {
    otherExpenses += parseInt(element.amount);
  });

const xValues = ["grocery", "entertainment", "bills", "other"];
const yValues = [];
yValues.push(groceryExpense);
yValues.push(entertainmentExpense);
yValues.push(billsExpense);
yValues.push(otherExpenses);

const barColors = ["red", "green","blue","orange"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: "Expense Graph"
    }
  }
});