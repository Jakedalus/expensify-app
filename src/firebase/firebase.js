import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };



//database.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val()); 
//});
//
//database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val()); 
//});
//
//database.ref('expenses').on('child_added', (snapshot) => {
//    console.log(snapshot.key, snapshot.val()); 
//});
//
//database.ref('expenses').push({
//    description: 'Tea',
//    note: 'I drank some good tea',
//    amount: 200,
//    createdAt: 20528
//});

//database.ref('expenses').on('value', (snapshot) => {
//    const expenses = [];
//    snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val()
//        }); 
//    });
//    console.log(expenses);
//});




//const expenses = [
//    {
//        description: 'Coffee',
//        note: 'I drank some bad coffee',
//        amount: 3500,
//        createdAt: 10382398423
//    }, {
//        description: 'Gas bill',
//        note: '',
//        amount: 44400,
//        createdAt: 93739847
//    }, {
//        description: 'Water bill',
//        note: 'I used a lot of water',
//        amount: 3529827,
//        createdAt: -340
//    }, 
//];

//expenses.forEach((expense) => {
//    database.ref('expenses').push(expense);
//});




//database.ref('notes/-KxEupA_0yHQBdjSSUOw').update({
//    body: 'Hey this note is updated'
//});


//database.ref('notes').push({
//    title: 'First Note',
//    body: 'This is my note'
//});
//
//database.ref('notes').push({
//    title: 'Another Note',
//    body: 'This is my second note'
//});

//const firebaseNotes = {
//    notes: {
//        'aflkjasdlj': {
//            title: 'First Note',
//            body: 'This is my note'
//        },
//        '134oisa': {
//            title: 'Another Note',
//            body: 'This is my second note'
//        }
//        
//    }
//};
//
////const notes = [{
////    id: '12',
////    title: 'First Note',
////    body: 'This is my note'
////}, {
////    id: '1al322',
////    title: 'Another Note',
////    body: 'This is my second note'
////}];
//
//database.ref('notes').set(notes);

//database.ref()
//    .once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    })
//    .catch((e) => {
//        console.log('Error fetching data', e);
//    });


//database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//}, (e) => {
//    console.log(e);
//});
//
//setTimeout(() => {
//    database.ref('job/company').set('Amazon');
//}, 2000);
//
//setTimeout(() => {
//    database.ref('job/company').set('Googles');
//}, 4000);

//const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
//}, (e) => {
//    console.log('Error with data fetching', e);
//});
//
//setTimeout(() => {
//    database.ref('age').set(35);
//}, 3500);
//
//setTimeout(() => {
//    database.ref().off(onValueChange);
//}, 7000);
//
//setTimeout(() => {
//    database.ref('age').set(65);
//}, 10500);

//database.ref().set({
//    name: 'Jake',
//    age: 55,
//    stressLevel: 6,
//    job: {
//        title: 'Software Dude',
//        company: 'Googleland'
//    },
//    location: {
//        city: 'OUTER SPACE',
//        country: 'USA'
//    },
//    coolAsHell: true
//}).then(() => {
//    console.log('Data is saved');
//}).catch((error) => {
//    console.log('Save failed.', error);
//});
//
//database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
//}).then(() => {
//    console.log('Data was updated');
//}).catch((error) => {
//    console.log('Update failed.', error);
//});;

//database.ref('isSingle')
//    .remove()
//    .then(() => {
//        console.log('Data was removed');
//    })
//    .catch((e) => {
//        console.log('Data was not removed', e);
//});










    