import React from 'react';
import ModifyFlower from '../modifyFlower/ModifyFlower'

const FlowerList = props => {
    let list = null;
    if(props.list) {
        list = props.list
        .map(flowers => (
            <ModifyFlower
            key={flowers.id}
            flowers={flowers}
            />
        ))
    }

    return(
        <div>
        <ul>{list}</ul>
        <button></button>
        </div>
    )
}

export default FlowerList
