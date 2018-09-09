import firebase from 'firebase';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: 'test-d3d42.firebaseapp.com',
  databaseURL: 'https://test-d3d42.firebaseio.com',
  projectId: 'test-d3d42',
  storageBucket: 'test-d3d42.appspot.com',
  messagingSenderId: '856945851988',
};
// initialinzing
export const app = firebase.initializeApp(config);

// insert
export const insert = (ref,data)=>{
    firebase
      .database()
      .ref(ref)
      .set(data)
      .then(() => {
        console.log('Inserted');
      })
      .catch(error => {
        console.log(error);
      });
}
// Push
export const push = (ref,data)=>{
    firebase
      .database()
      .ref(ref)
      .push(data)
      .then(() => {
        console.log('Pushed');
      })
      .catch(error => {
        console.log(error);
      });
}
// select
export const select = (ref)=>{
firebase
  .database()
  .ref(ref)
  .on('value', data => {
    return data.toJSON();
  }).then((data)=>{
    console.log(data);
  });
}
// update
export const update = (ref,data)=>{
firebase
  .database()
  .ref(ref)
  .update(data)
  .then(() => {
    console.log('Updated');
  })
  .catch(error => {
    console.log(error);
  });
}
// delete
export const remove = (ref)=>{
firebase
  .database()
  .ref(ref)
  .remove()
  .then(() => {
    console.log('Deleted');
  })
  .catch(error => {
    console.log(error);
  });
}