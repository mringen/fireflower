import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import AddFlowers from './addFlowers/AddFlowers'

import './App.css';
import FlowerList from './flowerList/FlowerList';

const App = () => {
    const [flowersData, setflowersData] = useState(null);

    useEffect(() => {
        const db = firebase.firestore();
        const flowersCollection = db.collection('flowers');
        flowersCollection.onSnapshot(snapshot => {
            let list = [];
            snapshot.forEach(doc => {
                let obj = {
                    ...doc.data(),
                    id: doc.id
                };
                list.push(obj);
            })
            setflowersData(list)
        })
    }, []);




  return (
    <div className="App">
    <AddFlowers />
    <h3>English and latin Flower names:</h3>
        <FlowerList list={flowersData} />

    </div>
  );
}

export default App;
