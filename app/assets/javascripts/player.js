/*var playerTitleElement = document.getElementById('player_title');

playerTitleElement.addEventListener('click', updateName);

function updateName(event) {
 var name = prompt('Enter a new name');
 event.target.textContent = 'Player 1: ' + name;
}
*/
//---------------------------------------------------------------------//
/*var costGetter = document.getElementById('add_tip');

costGetter.addEventListner('click', addTip)

function makePrice(event) {*/
    //enter meal price (without tip)
    //store regular meal price
    //save original meal price (car originalMealPrice = document.getElementByID('meal_cost).value')
    //ask for tip amount prompt()
    //save tip percentage
    //get tipAmount by mulitplying tip percentage by original meal price
        // var tipPercentage = prompt('What tip percent')
    //get total by adding tipAmount and original meal price
    //display to user total price
    //get back current value of total_cost
    //change current value of total_cost to totalAmount

/*    var originalMealPrice = document.getElementById('meal_cost').value
        //console.log('the data type of originalMealPrice is', typeof originalMealPrice)
    originalMealPrice = originalMealPrice * 1 //parseInt(originalMealPrice)
    var tipPercent = prompt('What percent tip do you want to leave?')
    var tipAmount = originalMealPrice * tipPercent/100
        //console.log('ok our tipAmout is', tipAmount)
    var totalAmount = originalMealPrice + TipAount;
        //console.log('ok our totalAmount due is', totalAmount)
    
    Total $ + TotalAmount = var finalPrice = document.getElementById('total_cost').innerHTML
        //console.log('ok our finalPrice is', finalPrice)

}*/

// OLD ORIGINAL CODE // 
/*var totalCost = mealPrice + AddTip

total_cost.addEventListner('click', AddTip);

function AddTip(event) {
    var TipAmount = prompt('What percent tip would you like to leave?')
    event.target.textContent = (TipAmount/100) * mealPrice;
}*/

//---------------------------------------------------------------//

//define answer var - random number computer generates
//save random guess from the computer (computersGuess)
//ask user for their guess (guess var)
//save users guess (store to variable usersGuess)
//compare if guess is correct
//if guess is < answer, display message "Your guess is too low"
//if guess is > answer, display message "Your guess is too high"

var computersGuess = Math.round(Math.random()*10)

var SubmitButton = document.getElementById('submit');

SubmitButton.addEventListener('click', checkGuess)

function checkGuess() {
    
    var usersGuess = document.getElementById('users_guess').value
    usersGuess = parseInt(usersGuess)
    if (computersGuess === usersGuess) {
        console.log('yay you won');
    } else {
        if (usersGuess < computersGuess) {
            console.log('your guess is too small');
        }
        if (usersGuess > computersGuess) {
            console.log('your guess is too big');
        }
        console.log('try again', computersGuess);
    }
    
    
}


/*while (answer = guess) {
  console.log('Your guess of' guess 'is close')
  console.log()
  if (guess < answer)
  if (guess > answer)
  
    
}

var guess = */