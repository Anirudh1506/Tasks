// Your code goes here
function myFunction() {
    let initialAmount = parseFloat(prompt('Enter Amount'));
    let years = parseInt(prompt('Enter No.Of Years'));
    let percentage = parseFloat(prompt('Enter Percentage Of Year:'));
    let a = 1000
    let b = 1
    let c = 100
    let preval = 2
    if(isNaN(initialAmount) || initialAmount < a || isNaN(years) || years < b || isNaN(percentage) || percentage > c) {
      alert('Invalid input data');
      return;
    } else {
        let totalProfit = 0;
        let totalAmount = initialAmount;
        for (let i = 1; i <= years; i++) {
            let profit = totalAmount * (percentage / c);
            totalProfit += profit;
            totalAmount += profit;
        }
        alert('Initial amount: ' + initialAmount + '\nNumber of years: ' + years + '\nPercentage of year: ' + percentage +
         '\n\nTotal Profit: ' + totalProfit.toFixed(preval) + '\nTotal amount: ' + totalAmount.toFixed(preval));
    }
    let totalProfit = 0;
    let totalAmount = initialAmount;
    let curram = initialAmount;
    for (let i = 1; i <= years; i++) {
      let profit = totalAmount * (percentage / c);
      totalProfit += profit;
      totalAmount += profit;
      if(i===1) {
        document.getElementById('results').innerHTML += `<div>${i}Year</div>`;
        document.getElementById('results').innerHTML += `<div><br></div>`;
        document.getElementById('results').innerHTML += `<div>Total profit: ${totalProfit.toFixed(preval)}
        (${percentage}% from initial amount)</div>`;
        document.getElementById('results').innerHTML += `<div><br></div>`;
        document.getElementById('results').innerHTML += `<div>Total amount: ${totalAmount.toFixed(preval)}
        (initial amount + total profit)</div>`;
        document.getElementById('results').innerHTML += `<div><br></div>`;
        document.getElementById('results').innerHTML += `<div><br></div>`;
        document.getElementById('results').innerHTML += `<div><br></div>`;
      } else {
        document.getElementById('results').innerHTML += `<div>${i}Year</div>`;
        document.getElementById('results').innerHTML += `<div>
        <br></div>`;
        document.getElementById('results').innerHTML += `<div>Total profit: ${totalProfit.toFixed(preval)}
        (previous profit + ${percentage}% from previous total amount (${curram.toFixed(preval)}))</div>`;
        document.getElementById('results').innerHTML += `<div>
        <br></div>`;
        document.getElementById('results').innerHTML += `<div>Total amount: ${totalAmount.toFixed(preval)}
        (initial amount + total profit)</div>`;
        document.getElementById('results').innerHTML += `<div><br></div>`;
        document.getElementById('results').innerHTML += `<div><br></div>`;
        document.getElementById('results').innerHTML += `<div><br></div>`;
      }
      curram = totalAmount;
    }
    }
    
    