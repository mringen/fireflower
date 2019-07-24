import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ModifyFlower = ({flowers}) => {

    const [editFlower, setEditFlower] = useState(false);
    const [englishName, setEnglishName] = useState(flowers.flower);
    const [latinName, setLatinName] = useState(flowers.latin);

    const deleteFlower = () => {
		firebase.firestore().collection('flowers').doc(flowers.id).delete()
		.then(() => console.log('Flower are erased'))
    }
    const changeFlower = () => {
        setEditFlower(true)

    }
    const saveChangeFlowerName = () => {
        setEditFlower(false);
		firebase.firestore().collection('flowers').doc(flowers.id).update({ flower: englishName, latin: latinName })
    }

    if (editFlower) {
        return ( <div><input onChange={e => setEnglishName(e.target.value)} value={englishName}></input>
                <input onChange={e => setLatinName(e.target.value)} value={latinName}></input>
                 <button onClick={saveChangeFlowerName} >Save change</button>
                 </div>)

    }

    return(
        <li className="flowerList">
        <span>English Name: {flowers.flower}</span>  <span>Latin Name: {flowers.latin}</span>
        <button onClick={deleteFlower}>Delete</button>
        <button onClick={changeFlower}>Edit</button>
		</li>

    )
}

export default ModifyFlower
