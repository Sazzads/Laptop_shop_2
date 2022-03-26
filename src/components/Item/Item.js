import React from 'react';

const Item = ({ item }) => {
    const { img, name } = item;
    return (
        <div>
            <img src={img} alt=""></img>
            <h6>{name}</h6>
        </div>
    );
};

export default Item;