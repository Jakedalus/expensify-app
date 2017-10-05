////////////////////////////////
////// OBJECT DESTRUCTURING /////
////////////////////////////////

//
//const person = {
//    name: 'Jake',
//    age: 35,
//    location: {
//        city: 'Philly',
//        temp: 72
//    }
//};
//
//const {name: firstName = 'Anonymous', age, location} = person;
//
//console.log(`${firstName} is ${age}`);
//
//const {city, temp: temperature} = location;
//
//if(city && temperature) console.log(`It's ${temperature} in ${city}`);


//const book = {
//    title: 'Ego Is the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//        name: 'Penguin'
//    }
//};
//
//const {name: publisherName = 'Self-Published'} = book.publisher;
//
//console.log(publisherName);
//

////////////////////////////////
////// ARRAY DESTRUCTURING /////
////////////////////////////////

//const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', '19147'];
////const address = [];
//
//const [ , city = 'Outer', state = 'Space' ] = address;
//
//console.log(`You are in ${city}, ${state}.`);

const menu = ['Iced Coffee', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium] = menu;

console.log(`A medium ${itemName} costs ${medium}`);




