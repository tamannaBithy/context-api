import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is header: {category}</h1>
            <button onClick={() => setCategory('laptop')}>laptop</button>
            <button onClick={() => setCategory('mobile')}>mobile</button>
            <button onClick={() => setCategory('camera')}>camera</button>
        </div>
    );
};

export default Header;