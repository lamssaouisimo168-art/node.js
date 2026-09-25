let balance = 500;
let totalAttempts = 10;

// etape 1

console.log("=== Simulateur de retrait au distributeur ===");
console.log(balance,totalAttempts);


// etape 2

for(let attempt = 1 ; attempt<=totalAttempts ;attempt++){

    let requestedAmount = attempt * 15
console.log(    `Attempt ${attempt} - Requested amount: ${requestedAmount}`)
}


//etape 3 

for(let attempt = 1 ; attempt<=totalAttempts ;attempt++){
     let requestedAmount = attempt * 15
    
    
      if(attempt % 4 === 0){
        console.log(`Attempt ${attempt} - Invalid withdrawal request, skipped.`)
   continue
    }
     
 console.log(    `Attempt ${attempt} - Requested amount: ${requestedAmount}`)
}

//etape 4
    
for(let attempt = 1 ; ; attempt++ ){
     let requestedAmount = attempt * 15
    
    
      if(attempt % 4 === 0){
        console.log(`Attempt ${attempt} - Invalid withdrawal request, skipped.`)
   continue
    } 
        if(requestedAmount>balance){
            console.log(`Attempt ${attempt} - Insufficient funds. Stopping simulation. `)
        break
        }
 console.log(    `Attempt ${attempt} - Requested amount: ${requestedAmount}`)
}

//etape 5


for(let attempt = 1 ; attempt<=totalAttempts ;attempt++){

    let requestedAmount = attempt * 15;
    let newBalance = balance - requestedAmount;
  
  if(attempt % 4 === 0){
    console.log(`Attempt ${attempt} - Invalid withdrawal request, skipped.`)
    continue
  }

  console.log(`Attempt ${attempt} - Requested amount: ${requestedAmount}`);


  
  if (balance<requestedAmount){

    console.log(`Attempt ${attempt} - Insufficient funds. Stopping simulation.`);
    break
  }
  
balance = balance - requestedAmount;

  console.log(`Attempt ${attempt} - Withdrawal successful. New balance:${newBalance}`);
}
console.log(
  `Simulation terminée. Solde final : ${balance} MAD après ${totalAttempts} tentatives autorisées.`
);