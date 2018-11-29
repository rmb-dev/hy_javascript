// create a Tip calcuator function that takes in three things: 1) meal price, 2) Tax Rate 3) Tip Rate
        // It should return a value which you can console.log.
        // Have the function default to 13% tax and 15% tip

        const calcTip = (price, taxRate = 0.13, tipRate = 0.15) => {
            return price + (price * tipRate) + ( price * taxRate);
        }

        const total = calcTip(100).toFixed(2);
        
        console.log(`Your total bill is $${total}`);

        // eg: var total = restaurantBill(100,0.13,0.15);
        // console.log("Your total bill is " + total);

        // BONUS: Make the function return a string formatted $x.xx
