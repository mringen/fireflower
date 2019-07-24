import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class AddFlowers extends Component {

    state = {
        flower: '',
        latin: ''
    }

    handleInputEnglish = e => {
        this.setState({flower: e.target.value})
    }
    handleInputLatin = e => {
        this.setState({latin: e.target.value})
    }
    addFlowerToDatabase = () => {
		let obj = { flower: this.state.flower, latin: this.state.latin };
		const collectionRef = firebase.firestore().collection('flowers');
		collectionRef.add(obj)
		.then(() => {
			console.log('Added flowers!');
		})
		.catch(error => {
			console.log('something went wrong, try again!');
		})
        this.setState({flower: '', latin: ''})
    }

    render() {
        return(
            <div>
                <h3>Add flower to collection</h3>
                <input onChange={this.handleInputEnglish} value={this.state.flower} placeholder="English name" />
                <input onChange={this.handleInputLatin} value={this.state.latin} placeholder="Latin name" />

                <button className="addFlowerBtn" onClick={this.addFlowerToDatabase}>Add new Flower</button>

            </div>
        )
    }
}
export default AddFlowers
