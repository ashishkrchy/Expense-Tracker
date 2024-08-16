const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get("user");
let data = JSON.parse(localStorage.getItem(user));

let isLoggedIn = false;
if (data != null) {
document.getElementById("login").innerHTML="Logout"
} else {
  document.getElementById("login").innerHTML="Login"
}

const expenses = {
  grocery: data ? data.expense.grocery : [],
  entertainment: data ? data.expense.entertainment : [],
  bills: data ? data.expense.bills : [],
  other: data ? data.expense.other : [],
};

function addExpense(categoryField) {
  const expenseAmountInput = document.getElementById(categoryField);
  const currentTime =  new Date().toUTCString();
    const expenseAmount = parseFloat(expenseAmountInput.value);
  if (!isNaN(expenseAmount)) {

    const prev = expenses[categoryField];
    const newObj = {
      time: currentTime,
      amount: expenseAmount
    }
    prev.push(newObj);

    const updatedData = {
      ...data,
      expense: {
        ...data.expense,
        [categoryField]: prev,
      },
    };
    localStorage.setItem(user, JSON.stringify(updatedData));

    data = JSON.parse(localStorage.getItem(user)); 
    expenseAmountInput.value = ""; 
    calculateNetExpense(); 
  } else {
    alert("Invalid expense amount. Please enter a number.");
    expenseAmountInput.value = "";
  }
}

function calculateNetExpense() {
  let parsedData = JSON.parse(localStorage.getItem(user));
let total =0;
parsedData.expense.grocery.forEach(element => {
    total += parseInt(element.amount);
  });
  parsedData.expense.entertainment.forEach(element => {
    total += parseInt(element.amount);
  });
  parsedData.expense.bills.forEach(element => {
    total += parseInt(element.amount);
  });
  parsedData.expense.other.forEach(element => {
    total += parseInt(element.amount);
  });

  const netAmountElement = document.getElementById("netAmount");
  netAmountElement.textContent = `${total.toFixed(2)}`;
}

function show(category){

  if(category === "grocery"){
    window.location.assign(`/Data/Grocery/grocery.html?user=${data.email}&category=${category}`);
  }
  else if(category === "entertainment"){
    window.location.assign(`/Data/Entertainment/entertainment.html?user=${data.email}&category=${category}`);
  }
  else if(category === "bills"){
    window.location.assign(`/Data/Bills/bills.html?user=${data.email}&category=${category}`);
  }
  else if(category === "other"){
    window.location.assign(`/Data/OtherExpenses/otherExpenses.html?user=${data.email}&category=${category}`);
  }
}

function reset(categoryField) {
  
  const updatedData = {
    ...data,
    expense: {
      ...data.expense,
      [categoryField]: [],
    },
  };
  localStorage.setItem(user, JSON.stringify(updatedData));
}
