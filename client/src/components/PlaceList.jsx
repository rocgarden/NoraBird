import React from 'react';
import Place from './place';

const ItemsList = props => {
    if(props.places.length === 0){
        return(
            <div>
                <h2>No items</h2>
            </div>
        )
    }else{
        <div>
            <h2>Items List</h2>
        </div>
    }



    return (
        <ul>
            {/* {props.places.map(item => (
                <Place
                   key={item.id}
                   id={item.id}
                   image={item.image}
                   itemName={item.itemName}
                   description={item.description}
                   creator={item.creator}
                   onDelete={item.onDeleteItem}

                />
            ))} */}
        </ul>
    )
}

export default ItemsList;