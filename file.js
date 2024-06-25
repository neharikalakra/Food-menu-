let input = require("readline-sync"); 
console.log('1.Monday\n2.Tuesday\n3.Wednasday\n4.thursday\n5.friday\n6.saturday\n7.sunday\n');
let day = Number(input.question("Enter your day:"));
if(day === 1){
    console.log('1.Breakfast\n2.Lunch\n3.Dinner\n');
    let timeinput = Number(input.question("Enter your timing:"));
    if( timeinput === 1){
        console.log('1.Sandwich\n2.Oats Upma\n3.Aloo Pratha\n4.Chilla roti\n');
        let dish = Number(input.question("Enter your Fav:"));

        // This if for dish 1//
        // for Brekfast//

        if(dish === 1){
            console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n 1.Online");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 70rs for full plate sandwich\n");
                    let foodprice = 70;
                    billAmount = Number(input.question("pay your amount:\n"));
                    if(billAmount === foodprice){
                        console.log("your order has sucessfully confirmed ")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********');
                    console.log("pay 40rs/ to place your order")
                    let foodprice = 30 ;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed.")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you");
                    }
                } else{
                    console.log("invalid input");
                }
            }

            //this else part for dish 2 Oats Upma//

        } else if(dish===2){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 60rs for full plate Oats Upma\n");
                    let foodprice = 60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input")
                }
            } else {
                console.log("Payment:-\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 30rs for half plate Oats upma\n");
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 3 Aaloo paratha//

        } else if ( dish === 3 ) {
            console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 100rs for full plate Aloo Paratha \n")
                    let foodprice =100;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else {
                    console.log("invalid input");
                }
            } else {
                console.log("Payment:\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 50rs for half plate Aloo paratha\n");
                    let foodprice = 50;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 4 Chilla roti//


        } else if( dish == 4){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment:-"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 60rs for full plate chilla roti\n");
                    let foodprice =60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else{ 
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********')
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }
        } else{
            console.log("invalid input");
        }

//This block is for veg foods//
// 1st dish Rajma chawal//

    }else if( timeinput === 2){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:"));
        if(typeofdish===1){
            console.log("1.Rajma Chawal.\n2.Palak paneer.\n3.Vegtable Biryani.\n4.Matar paneer.\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate rajma chawal\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate rajma chawal\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 plak paneer//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate palak paneer\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate palak paneer\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Vegitable Biryani//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-150rs\n2.Half Plate:- 75rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 150rs for full plate Veg Biryani\n");
                        let foodprice =150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for hlaf plate Veg Biryani\n")
                        let foodprice = 75;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 matar paneer //
    
    
            } else if( dish === 4){
                console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 100 for full plate matar paneer\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 50rs for half plate matar paneer\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Matar Paneer)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for nove dishes//
//1st is Egg Curry//

        } else if ( typeofdish === 2){
            console.log("1. Egg curry.\n2.Chicken Biryani.\n3.Mutton Rogan josh.\n4.Fish Curry.\n");
            let dish = Number(input.question("Enter your fav:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Egg Curry\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 100rs for half plate Egg curry\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 Chicken Biryani//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 300rs fro full plate Chicken Biryani\n");
                        let foodprice = 300;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n2.Cash\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 150rs for half plate chichken Biryani\n");
                        let foodprice = 150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Mutton Rogan Josh//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 400rs for full plate Mutton Rogan josh\n");
                        let foodprice =400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for hlaf plate Mutton Rogan Josh\n")
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Fish Curry //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-350rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 350for full plate Fish curry\n");
                        let foodprice = 350;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 200rs for half plate fish curry\n");
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Fish curry)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }
        } else{
            console.log("invalis input");
        }

// from here it is the dinner part of menu veg//
//1st is Daal Tadka

    } else if(timeinput===3){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:\n"));
        if(typeofdish===1){
            console.log("1.Daal Tadka.\n2.Palak paneer.\n3.Aloo gobhi.\n4.Malai Kofta.\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate Daal tadka\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate Daal Tadka\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 plak paneer//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate palak paneer\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n2.");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate palak paneer\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Aloo Gobhi //
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed and you have to pay 150rs for full Aloo Gobhi\n");
                        let foodprice =200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("Your order has conformed and you have to pay 70rs for hlaf plate Aloo Gobhi\n")
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Malai Kofta //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed you have to pay 300rs for full plate Malai Kofta\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has conformed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    }else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has conformed and you have to pay 50rs for half plate matar paneer\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Matar Paneer)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for noveg dishes for dinner//
//1st is Tandoori chicken//

        } else if ( typeofdish == 2){
            console.log("1.Tandoori chicken.\n2.Keema matar.\n3.Chicken tikka masala.\n4.Prawn Masala.\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Tandoori Chicken\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log('Thank you and please waiter to bring your order\n')
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 100rs for half plate Egg curry\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 Keema Matar//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 300rs\n2.Half Plate:- 180rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 300rs fro full plate Keema Matar\n");
                        let foodprice = 300;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 180rs for half plate Keema Matar\n");
                        let foodprice = 180;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Chicken Tikka Masala//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 400rs for full plate Chicken Tikka Masala\n");
                        let foodprice =400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for hlaf plate Chicken tikka masala\n")
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Prawn Masala //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 350for full plate Prawn Masala\n");
                        let foodprice = 400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    }else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 200rs for half plate fish curry\n");
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Fish curry)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }
        } else{
            console.log("invalid input");
        }
    } else {
        console.log("Invalid input");
    }  

//Day 2 Monday//

} else if(day===2){
    console.log('1.Breakfast\n2.Lunch\n3.Dinner\n');
    let timeinput = Number(input.question("Enter your timing:"));
    if( timeinput === 1){
        console.log('1.Pasta\n2.Upma\n3.Poha\n4.puri\n');
        let dish = Number(input.question("Enter your Fav:"));

        // This if for dish 1//
        // Poha//

        if(dish === 1){
            console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n 1.Online");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 70rs for full plate Poha\n");
                    let foodprice = 70;
                    billAmount = Number(input.question("pay your amount:\n"));
                    if(billAmount === foodprice){
                        console.log("your order has sucessfully confirmed full plate pasta ")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********');
                    console.log("pay 40rs/ ")
                    let foodprice = 30 ;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed.")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        condole.log( "Your order has confirmed have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you");
                    }
                } else{
                    console.log("invalid input");
                }
            }

            //this else part for dish 2 Aloo puri//

        } else if(dish===2){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 60rs for full plate Aloo puri\n");
                    let foodprice = 60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input")
                }
            } else {
                console.log("Payment:-\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 30rs for half plate Aloo puri\n");
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 3 Medu vada//

        } else if ( dish === 3 ) {
            console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 100rs for full plate Medu vada\n")
                    let foodprice =100;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else {
                    console.log("invalid input");
                }
            } else {
                console.log("Payment:\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 50rs for half plate Medu vada\n");
                    let foodprice = 50;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 4 Upma//


        } else if( dish == 4){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment:-"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 60rs for full plate Upma\n");
                    let foodprice =60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else{ 
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********')
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and you  have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }
        } else{
            console.log("invalid input");
        }

//This block is for veg foods//
// Chole bature//

    }else if( timeinput === 2){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:"));
        if(typeofdish===1){
            console.log("1.Chole Bature.\n2.Paneer tikka.\n3.Dahi Vada.\n4.Masala Dosa\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate Chole Bature\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate Chole Bature\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 paneer tikka//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate paneer tikka\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate Paneer tikka\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Dahi vada//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-150rs\n2.Half Plate:- 75rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 150rs for full plate Dahi vada\n");
                        let foodprice =150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for hlaf plate Dahi vada\n")
                        let foodprice = 75;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 masala dosa //
    
    
            } else if( dish === 4){
                console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 100 for full plate masala dosa\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 50rs for half plate Masal dosa\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Masal Dosa)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for nove dishes//
//1st is Egg Curry//

        } else if ( typeofdish === 2){
            console.log("1. Egg curry.\n2.Chicken Biryani.\n3.Mutton Rogan josh.\n4.Fish Curry.\n");
            let dish = Number(input.question("Enter your fav:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Egg Curry\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 100rs for half plate Egg curry\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 Chicken Biryani//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 300rs fro full plate Chicken Biryani\n");
                        let foodprice = 300;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 150rs for half plate chichken Biryani\n");
                        let foodprice = 150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Mutton Rogan Josh//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 400rs for full plate Mutton Rogan josh\n");
                        let foodprice =400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for hlaf plate Mutton Rogan Josh\n")
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Fish Curry //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-350rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 350for full plate Fish curry\n");
                        let foodprice = 350;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 200rs for half plate fish curry\n");
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Fish curry)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }
        } else{
            console.log("invalis input");
        }

// from here it is the dinner part of menu veg//
//1st is Kadai Paneer//

    } else if(timeinput===3){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:\n"));
        if(typeofdish===1){
            console.log("1.Kadai paneer.\n2.Vegetable Pulao.\n3.Chana masala.\n4.Gobi Manchurian\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate Kadai Paneer\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate Kadai Paneer\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 vegetable pulao//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate vegetable pulao\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n2.");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate Vegetable Pulao\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Chana Masala //
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed and you have to pay 150rs for full Chana masala\n");
                        let foodprice =200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("Your order has conformed and you have to pay 70rs for hlaf plate Chana Masala\n")
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Gobi Manchurian//
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed you have to pay 300rs for full plate Gobi Manchurian\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has conformed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    }else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has conformed and you have to pay 50rs for half plate Gobi manchurian\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Kadai paneer)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for noveg dishes for dinner Beef Stew//

        } else if ( typeofdish == 2){
            console.log("1.Beef Stew.\n2.Pork Chops.\n3.Egg omelette.\n4.Chicken curry.\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Beef Stew\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log('Thank you and please waiter to bring your order\n')
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 100rs for half plate Beef stew\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 Pork chops//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 300rs\n2.Half Plate:- 180rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 300rs fro full plate Pork chops\n");
                        let foodprice = 300;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 180rs for half plate POrk chops\n");
                        let foodprice = 180;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish Egg omelette//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed and you have to pay 400rs for full plate Egg omelette\n");
                        let foodprice =400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has conformed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for hlaf plate Chicken tikka masala\n")
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 chicken curry //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 350for full plate Chicken curry\n");
                        let foodprice = 400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    }else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 200rs for half plate chicken curry\n");
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Chicken curry)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }
        } else{
            console.log("invalid input");
        }
    } else {
        console.log("Invalid input");
    }

//day 3 tuesday//

} else if(day===2){
    console.log('1.Breakfast\n2.Lunch\n3.Dinner\n');
    let timeinput = Number(input.question("Enter your timing:"));
    if( timeinput === 1){
        console.log('1.Pasta\n2.Upma\n3.Poha\n4.puri\n');
        let dish = Number(input.question("Enter your Fav:"));

        // This if for dish 1//
        // Poha//

        if(dish === 1){
            console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n 1.Online");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 70rs for full plate Poha\n");
                    let foodprice = 70;
                    billAmount = Number(input.question("pay your amount:\n"));
                    if(billAmount === foodprice){
                        console.log("your order has sucessfully confirmed full plate pasta ")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********');
                    console.log("pay 40rs/ ")
                    let foodprice = 30 ;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed.")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        condole.log( "Your order has confirmed have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you");
                    }
                } else{
                    console.log("invalid input");
                }
            }

            //this else part for dish 2 Aloo puri//

        } else if(dish===2){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 60rs for full plate Aloo puri\n");
                    let foodprice = 60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input")
                }
            } else {
                console.log("Payment:-\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 30rs for half plate Aloo puri\n");
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 3 Medu vada//

        } else if ( dish === 3 ) {
            console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 100rs for full plate Medu vada\n")
                    let foodprice =100;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else {
                    console.log("invalid input");
                }
            } else {
                console.log("Payment:\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 50rs for half plate Medu vada\n");
                    let foodprice = 50;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 4 Upma//


        } else if( dish == 4){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment:-"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 60rs for full plate Upma\n");
                    let foodprice =60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else{ 
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********')
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and you  have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }
        } else{
            console.log("invalid input");
        }

//This block is for veg foods//
// Chole bature//

    }else if( timeinput === 2){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:"));
        if(typeofdish===1){
            console.log("1.Chole Bature.\n2.Paneer tikka.\n3.Dahi Vada.\n4.Masala Dosa\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate Chole Bature\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate Chole Bature\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 paneer tikka//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate paneer tikka\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate Paneer tikka\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Dahi vada//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-150rs\n2.Half Plate:- 75rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 150rs for full plate Dahi vada\n");
                        let foodprice =150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for hlaf plate Dahi vada\n")
                        let foodprice = 75;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 masala dosa //
    
    
            } else if( dish === 4){
                console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 100 for full plate masala dosa\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 50rs for half plate Masal dosa\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Masal Dosa)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for nove dishes//
//1st is Egg Curry//

        } else if ( typeofdish === 2){
            console.log("1. Egg curry.\n2.Chicken Biryani.\n3.Mutton Rogan josh.\n4.Fish Curry.\n");
            let dish = Number(input.question("Enter your fav:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Egg Curry\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 100rs for half plate Egg curry\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 Chicken Biryani//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 300rs fro full plate Chicken Biryani\n");
                        let foodprice = 300;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 150rs for half plate chichken Biryani\n");
                        let foodprice = 150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Mutton Rogan Josh//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 400rs for full plate Mutton Rogan josh\n");
                        let foodprice =400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for hlaf plate Mutton Rogan Josh\n")
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Fish Curry //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-350rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 350for full plate Fish curry\n");
                        let foodprice = 350;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 200rs for half plate fish curry\n");
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Fish curry)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }
        } else{
            console.log("invalis input");
        }

// from here it is the dinner part of menu veg//
//1st is Kadai Paneer//

    } else if(timeinput===3){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:\n"));
        if(typeofdish===1){
            console.log("1.Kadai paneer.\n2.Vegetable Pulao.\n3.Chana masala.\n4.Gobi Manchurian\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate Kadai Paneer\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate Kadai Paneer\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 vegetable pulao//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate vegetable pulao\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n2.");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate Vegetable Pulao\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Chana Masala //
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed and you have to pay 150rs for full Chana masala\n");
                        let foodprice =200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("Your order has conformed and you have to pay 70rs for hlaf plate Chana Masala\n")
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Gobi Manchurian//
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed you have to pay 300rs for full plate Gobi Manchurian\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has conformed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    }else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has conformed and you have to pay 50rs for half plate Gobi manchurian\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Kadai paneer)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for noveg dishes for dinner Beef Stew//

        } else if ( typeofdish == 2){
            console.log("1.Beef Stew.\n2.Pork Chops.\n3.Egg omelette.\n4.Chicken curry.\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Beef Stew\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log('Thank you and please waiter to bring your order\n')
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 100rs for half plate Beef stew\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 Pork chops//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 300rs\n2.Half Plate:- 180rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 300rs fro full plate Pork chops\n");
                        let foodprice = 300;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 180rs for half plate POrk chops\n");
                        let foodprice = 180;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish Egg omelette//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed and you have to pay 400rs for full plate Egg omelette\n");
                        let foodprice =400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has conformed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for hlaf plate Chicken tikka masala\n")
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 chicken curry //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 350for full plate Chicken curry\n");
                        let foodprice = 400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    }else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 200rs for half plate chicken curry\n");
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Chicken curry)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }
        } else{
            console.log("invalid input");
        }
    } else {
        console.log("Invalid input");
    }
}

//day 4 tuesday//

else if(day === 4){
    console.log('1.Breakfast\n2.Lunch\n3.Dinner\n');
    let timeinput = Number(input.question("Enter your timing:"));
    if( timeinput === 1){
        console.log('1.Sandwich\n2.Oats Upma\n3.Aloo Pratha\n4.Chilla roti\n');
        let dish = Number(input.question("Enter your Fav:"));

        // This if for dish 1//
        // for Brekfast//

        if(dish === 1){
            console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n 1.Online");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 70rs for full plate sandwich\n");
                    let foodprice = 70;
                    billAmount = Number(input.question("pay your amount:\n"));
                    if(billAmount === foodprice){
                        console.log("your order has sucessfully confirmed ")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********');
                    console.log("pay 40rs/ to place your order")
                    let foodprice = 30 ;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed.")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you");
                    }
                } else{
                    console.log("invalid input");
                }
            }

            //this else part for dish 2 Oats Upma//

        } else if(dish===2){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 60rs for full plate Oats Upma\n");
                    let foodprice = 60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input")
                }
            } else {
                console.log("Payment:-\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 30rs for half plate Oats upma\n");
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 3 Aaloo paratha//

        } else if ( dish === 3 ) {
            console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 100rs for full plate Aloo Paratha \n")
                    let foodprice =100;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else {
                    console.log("invalid input");
                }
            } else {
                console.log("Payment:\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 50rs for half plate Aloo paratha\n");
                    let foodprice = 50;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 4 Chilla roti//


        } else if( dish == 4){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment:-"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 60rs for full plate chilla roti\n");
                    let foodprice =60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else{ 
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********')
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }
        } else{
            console.log("invalid input");
        }

//This block is for veg foods//
// 1st dish Rajma chawal//

    }else if( timeinput === 2){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:"));
        if(typeofdish===1){
            console.log("1.Rajma Chawal.\n2.Palak paneer.\n3.Vegtable Biryani.\n4.Matar paneer.\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate rajma chawal\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate rajma chawal\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 plak paneer//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate palak paneer\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate palak paneer\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Vegitable Biryani//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-150rs\n2.Half Plate:- 75rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 150rs for full plate Veg Biryani\n");
                        let foodprice =150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for hlaf plate Veg Biryani\n")
                        let foodprice = 75;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 matar paneer //
    
    
            } else if( dish === 4){
                console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 100 for full plate matar paneer\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 50rs for half plate matar paneer\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Matar Paneer)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for nove dishes//
//1st is Egg Curry//

        } else if ( typeofdish === 2){
            console.log("1. Egg curry.\n2.Chicken Biryani.\n3.Mutton Rogan josh.\n4.Fish Curry.\n");
            let dish = Number(input.question("Enter your fav:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Egg Curry\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 100rs for half plate Egg curry\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 Chicken Biryani//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 300rs fro full plate Chicken Biryani\n");
                        let foodprice = 300;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n2.Cash\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 150rs for half plate chichken Biryani\n");
                        let foodprice = 150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Mutton Rogan Josh//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 400rs for full plate Mutton Rogan josh\n");
                        let foodprice =400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for hlaf plate Mutton Rogan Josh\n")
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Fish Curry //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-350rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 350for full plate Fish curry\n");
                        let foodprice = 350;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 200rs for half plate fish curry\n");
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Fish curry)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }
        } else{
            console.log("invalis input");
        }

// from here it is the dinner part of menu veg//
//1st is Daal Tadka

    } else if(timeinput===3){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:\n"));
        if(typeofdish===1){
            console.log("1.Daal Tadka.\n2.Palak paneer.\n3.Aloo gobhi.\n4.Malai Kofta.\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate Daal tadka\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate Daal Tadka\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 plak paneer//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate palak paneer\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n2.");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate palak paneer\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Aloo Gobhi //
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed and you have to pay 150rs for full Aloo Gobhi\n");
                        let foodprice =200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("Your order has conformed and you have to pay 70rs for hlaf plate Aloo Gobhi\n")
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Malai Kofta //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed you have to pay 300rs for full plate Malai Kofta\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has conformed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    }else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has conformed and you have to pay 50rs for half plate matar paneer\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Matar Paneer)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for noveg dishes for dinner//
//1st is Tandoori chicken//

        } else if ( typeofdish == 2){
            console.log("1.Tandoori chicken.\n2.Keema matar.\n3.Chicken tikka masala.\n4.Prawn Masala.\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Tandoori Chicken\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log('Thank you and please waiter to bring your order\n')
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 100rs for half plate Egg curry\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 Keema Matar//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 300rs\n2.Half Plate:- 180rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 300rs fro full plate Keema Matar\n");
                        let foodprice = 300;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 180rs for half plate Keema Matar\n");
                        let foodprice = 180;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Chicken Tikka Masala//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 400rs for full plate Chicken Tikka Masala\n");
                        let foodprice =400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for hlaf plate Chicken tikka masala\n")
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Prawn Masala //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 350for full plate Prawn Masala\n");
                        let foodprice = 400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    }else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 200rs for half plate fish curry\n");
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Fish curry)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }
        } else{
            console.log("invalid input");
        }
    } else {
        console.log("Invalid input");
    }

//day 5 //


} else if(day===5){
    console.log('1.Breakfast\n2.Lunch\n3.Dinner\n');
    let timeinput = Number(input.question("Enter your timing:"));
    if( timeinput === 1){
        console.log('1.Pasta\n2.Upma\n3.Poha\n4.puri\n');
        let dish = Number(input.question("Enter your Fav:"));

        // This if for dish 1//
        // Poha//

        if(dish === 1){
            console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n 1.Online");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 70rs for full plate Poha\n");
                    let foodprice = 70;
                    billAmount = Number(input.question("pay your amount:\n"));
                    if(billAmount === foodprice){
                        console.log("your order has sucessfully confirmed full plate pasta ")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********');
                    console.log("pay 40rs/ ")
                    let foodprice = 30 ;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed.")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        condole.log( "Your order has confirmed have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you");
                    }
                } else{
                    console.log("invalid input");
                }
            }

            //this else part for dish 2 Aloo puri//

        } else if(dish===2){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n')
                    console.log("You have to pay 60rs for full plate Aloo puri\n");
                    let foodprice = 60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input")
                }
            } else {
                console.log("Payment:-\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 30rs for half plate Aloo puri\n");
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 3 Medu vada//

        } else if ( dish === 3 ) {
            console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 100rs for full plate Medu vada\n")
                    let foodprice =100;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else {
                    console.log("invalid input");
                }
            } else {
                console.log("Payment:\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 50rs for half plate Medu vada\n");
                    let foodprice = 50;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }

            // this condetion for dish 4 Upma//


        } else if( dish == 4){
            console.log("1.Full Plate:-60rs\n2.Half Plate:- 30rs/\n");
            let plateinput = Number(input.question("Enter Plate:"));
            if(plateinput===1){
                console.log("Payment:-\n1.Online\n2.Cash");
                let cashinput = Number(input.question("Choose Payment:-"))
                if( cashinput===1 ){
                    console.log('UPI********\n');
                    console.log("You have to pay 60rs for full plate Upma\n");
                    let foodprice =60;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else if(cashinput===2){
                    console.log('Thank you and please waiter to bring your order\n')
                } else{ 
                    console.log("invalid input");
                }
            } else {
                console.log("Payment\n1.Online\n");
                let cashinput = Number(input.question("Choose Payment"));
                if( cashinput===1 ){
                    console.log('UPI********')
                    let foodprice = 30;
                    billAmount = Number(input.question("pay your amount:"));
                    if(billAmount == foodprice){
                        console.log("your order has successfully placed")
                    } else if(billAmount > foodprice){
                        let extraprice = billAmount - foodprice;
                        console.log( "Your order has confirmed and you  have paid some extra amount", extraprice, "Please recieve it from here")
                    } else {
                        let halfpaid = foodprice - billAmount;
                        console.log("You havn't paid full amount please try angain Thank you")
                    }
                } else{
                    console.log("invalid input");
                }
            }
        } else{
            console.log("invalid input");
        }

//This block is for veg foods//
// Chole bature//

    }else if( timeinput === 2){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:"));
        if(typeofdish===1){
            console.log("1.Chole Bature.\n2.Paneer tikka.\n3.Dahi Vada.\n4.Masala Dosa\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate Chole Bature\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate Chole Bature\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 paneer tikka//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate paneer tikka\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate Paneer tikka\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Dahi vada//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-150rs\n2.Half Plate:- 75rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 150rs for full plate Dahi vada\n");
                        let foodprice =150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for hlaf plate Dahi vada\n")
                        let foodprice = 75;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 masala dosa //
    
    
            } else if( dish === 4){
                console.log("1.Full Plate:-100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 100 for full plate masala dosa\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 50rs for half plate Masal dosa\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Masal Dosa)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for nove dishes//
//1st is Egg Curry//

        } else if ( typeofdish === 2){
            console.log("1. Egg curry.\n2.Chicken Biryani.\n3.Mutton Rogan josh.\n4.Fish Curry.\n");
            let dish = Number(input.question("Enter your fav:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Egg Curry\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 100rs for half plate Egg curry\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 Chicken Biryani//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 300rs fro full plate Chicken Biryani\n");
                        let foodprice = 300;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 150rs for half plate chichken Biryani\n");
                        let foodprice = 150;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Mutton Rogan Josh//
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-400rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 400rs for full plate Mutton Rogan josh\n");
                        let foodprice =400;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for hlaf plate Mutton Rogan Josh\n")
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Fish Curry //
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-350rs\n2.Half Plate:- 200rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have ot pay 350for full plate Fish curry\n");
                        let foodprice = 350;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 200rs for half plate fish curry\n");
                        let foodprice = 200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Fish curry)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }
        } else{
            console.log("invalis input");
        }

// from here it is the dinner part of menu veg//
//1st is Kadai Paneer//

    } else if(timeinput===3){
        console.log('1.Veg\n2.Non Veg');
        let typeofdish = Number(input.question("Enter the type of dish:\n"));
        if(typeofdish===1){
            console.log("1.Kadai paneer.\n2.Vegetable Pulao.\n3.Chana masala.\n4.Gobi Manchurian\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-70rs\n2.Half Plate:- 30rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 70rs for full plate Kadai Paneer\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("You have to pay 30rs for half plate Kadai Paneer\n");
                        let foodprice = 30 ;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            condole.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input")
                    }
                }
    
                //this else part for dish 2 vegetable pulao//
    
            } else if(dish===2){
                console.log("1.Full Plate:- 100rs\n2.Half Plate:- 50rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 100rs fro full plate vegetable pulao\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "You have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n2.");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("you have to pay 50rs for half plate Vegetable Pulao\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    }else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 3 Chana Masala //
    
            } else if ( dish === 3 ) {
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed and you have to pay 150rs for full Chana masala\n");
                        let foodprice =200;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invlid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("Your order has conformed and you have to pay 70rs for hlaf plate Chana Masala\n")
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
    
                // this condetion for dish 4 Gobi Manchurian//
    
    
            } else if( dish == 4){
                console.log("1.Full Plate:-300rs\n2.Half Plate:- 150rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment:-\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment:-"))
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has confirmed you have to pay 300rs for full plate Gobi Manchurian\n");
                        let foodprice = 100;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed");
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has conformed and you have paid some extra amount", extraprice, "Please recieve it from here");
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you");
                        }
                    }else{
                        console.log("Invalid input");
                    }
                } else {
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"));
                    if( cashinput===1 ){
                        console.log('UPI********\n');
                        console.log("Your order has conformed and you have to pay 50rs for half plate Gobi manchurian\n");
                        let foodprice = 50;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed (Kadai paneer)")
                        } else if(billAmount > foodprice){
                            let extraprice = billAmount - foodprice;
                            console.log( "Your order has confirmed and you have paid some extra amount", extraprice, "Please recieve it from here")
                        } else {
                            let halfpaid = foodprice - billAmount;
                            console.log("You havn't paid full amount please try angain Thank you")
                        }
                    } else{
                        console.log("Invalid input");
                    }
                }
            }

// This else part is for noveg dishes for dinner Beef Stew//

        } else if ( typeofdish == 2){
            console.log("1.Beef Stew.\n2.Pork Chops.\n3.Egg omelette.\n4.Chicken curry.\n");
            let dish = Number(input.question("Enter your fav.:-"));
            if(dish === 1){
                console.log("1.Full Plate:-200rs\n2.Half Plate:- 100rs/\n");
                let plateinput = Number(input.question("Enter Plate:"));
                if(plateinput===1){
                    console.log("Payment\n1.Online\n");
                    let cashinput = Number(input.question("Choose Payment"))
                    if( cashinput===1 ){
                        console.log('UPI********\n')
                        console.log("You have to pay 200rs for full plate Beef Stew\n");
                        let foodprice = 70;
                        billAmount = Number(input.question("pay your amount:"));
                        if(billAmount == foodprice){
                            console.log("your order has successfully placed")
                        }
                    }
                }
            }
        }
    }
}                
