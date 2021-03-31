import './App.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Shop() {
    
    const [items, setItems] = useState([]);

    const fetchItems = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            
            setItems(json);
        })
    };

    useEffect(fetchItems, []);


    return (
      <div className="App">
        <h1>Shop Page</h1>
        
        <ul>
            {items.map(({id, title, price, description}) => (
                <li key={id} className="item">
                    <Link to={`/shop/${id}`}>
                        <h1>{title}</h1>
                        <h2>${price}</h2>
                        <p>{description}</p>
                        <hr/>
                    </Link>
                </li>
            ))}
        </ul>
      </div>
    );
}

