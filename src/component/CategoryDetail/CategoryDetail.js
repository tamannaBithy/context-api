import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const { name } = props.product;

    return (
        <div>
            <h4>This is my categories detail</h4>
            <h5>Selected Category: {name}</h5>
        </div>
    );
};

export default CategoryDetail;