// (5 points): As a developer, I want to make at least three commits.
// (5 points): As a user, I want a destination to be randomly selected for my day trip.
// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.
// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
// (10 points): As a user, I want to display my completed trip in the console.
// (5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

let vacaDestinations = ['Grand Canyon', 'Yosemite', 'Yellowstone', 'New York City', 'San Francisco']
let vacaRestaurants = ['Cheesecake Factory', 'Five Guys', 'Fuddruckers', 'Subway', 'Applebees']
let vacaTravelMode = ['Car', 'Plane', 'Bus', 'Uber', 'Hitchhiking']
let vacaEntertainment = ['Ballet', 'Sporting event', 'Festival', 'Family Reunion', ' Hiking', 'Kayaking', 'Waterpark']

//https://www.w3schools.com/jsref/jsref_random.asp
// Math.floor((Math.random() * 10) + 1);


function getDestination(array){ 
	let randoV = Math.floor((Math.random() * 5) + 1);
    randoV--;
    let myDestination = array[randoV]
    return myDestination;
}

function getRestaurant(array){ 
	let randoV = Math.floor((Math.random() * 4) + 1);
    randoV--;
    let myRestaurant = array[randoV]
    return myRestaurant;
}

function getTravel(array){ 
	let randoV = Math.floor((Math.random() * 4) + 1);
    randoV--;
    let myTravel = array[randoV]
    return myTravel;
}

function getEntertainment(array){ 
	let randoV = Math.floor((Math.random() * 4) + 1);
    randoV--;
    let myEntertainment = array[randoV]
    return myEntertainment;
}
//Version 1, 
// let startVacation = "yes"
// let startVacationKey = true
// while (startVacationKey) {
//    let getVacation = prompt("Are you ready for vacation? yes or no")
//    getVacation.toLowerCase();
//    if (getVacation == startVacation){
//         let satisfiedCustomer = "yes"
//         let finalizeVacation = true
//         while (finalizeVacation) { //build the vacation
//             let myDestinationFinal = getDestination(vacaDestinations)
//             let myRestaurant = getRestaurant(vacaRestaurants)
//             let myTravel = getTravel(vacaTravelMode)
//             let myEntertainment = getEntertainment(vacaEntertainment)
//             let getSatisfaction = prompt('You will be going to ' + myDestinationFinal + '. You will travel by ' + myTravel + '. You will dine at ' + myRestaurant + '. and for your enjoyment, you will experience ' + myEntertainment + '!!!!! Do you accept these terms? Yes or no')
//             getSatisfaction.toLowerCase();
//             if (getSatisfaction == satisfiedCustomer){// Finalize the vacation
//                 console.log('You will be going to ' + myDestinationFinal + '. You will travel by ' + myTravel + '. You will dine at ' + myRestaurant + '. and for your enjoyment, you will experience ' + myEntertainment + '!!!!!')
//                 console.log('Enjoy your vacation!')
//                 finalizeVacation = false
//                 startVacationKey = false
//             }
//         }    
//     }    
// }
let satisfiedCustomer = "yes"
let finalizeVacation = true
let yay = "yay"
while (finalizeVacation) { //build the vacation
    let myDestinationFinal = getDestination(vacaDestinations)
    let destinationApproval = prompt('How does ' + myDestinationFinal + ' sound? yay or nay?')
    
    while(destinationApproval != yay){ //no likey of the vacation? re-roll!
        myDestinationFinal = getDestination(vacaDestinations)
        destinationApproval = prompt(myDestinationFinal + ' better? yay or nay')
        destinationApproval.toLowerCase();
    }


    let myRestaurant = getRestaurant(vacaRestaurants)
    let restaurantApproval = prompt('How does ' + myRestaurant + ' sound? yay or nay?')
    
    while(restaurantApproval != yay){
        myRestaurant = getRestaurant(vacaRestaurants)
        restaurantApproval = prompt('How does ' + myRestaurant + ' sound? yay or nay?')
        restaurantApproval.toLowerCase();
    }

    let myTravel = getTravel(vacaTravelMode)
    let travelApproval = prompt('How does ' + myTravel + ' sound? yay or nay?')

    while(travelApproval != yay){
        myTravel = getTravel(vacaTravelMode)
        travelApproval = prompt('How does ' + myTravel + ' sound? yay or nay?')
        travelApproval.toLowerCase();
    }

    let myEntertainment = getEntertainment(vacaEntertainment)
    let entertainmentApproval = prompt('How does ' + myEntertainment + ' sound? yay or nay?')

    while(entertainmentApproval != yay){
        myEntertainment = getEntertainment(vacaEntertainment)
        entertainmentApproval = prompt('How does ' + myEntertainment + ' sound? yay or nay?')
        entertainmentApproval.toLowerCase();
    }
finalApproval = prompt('You will be going to ' + myDestinationFinal + '. You will travel by ' + myTravel + '. You will dine at ' + myRestaurant + '. and for your enjoyment, you will experience ' + myEntertainment + '. yay or nay?')
finalApproval.toLowerCase();
    if(finalApproval == yay){
    console.log('You will be going to ' + myDestinationFinal + '. You will travel by ' + myTravel + '. You will dine at ' + myRestaurant + '. and for your enjoyment, you will experience ' + myEntertainment + '!!!!!')
    console.log('Enjoy your vacation!')
    finalizeVacation = false
    }
}
//this is a test to push to git