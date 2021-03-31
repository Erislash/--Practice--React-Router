import './App.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Item({match}) {
    
    const [item, setItem] = useState({});

    const fetchItem = () => {
        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        .then(res => res.json())
        .then(({title, price, description, image}) => {
            console.log(title);
            setItem({ title, price, description, image });
        })
    };

    useEffect(() => {
        fetchItem();
    }, []);



    return (
      <div className="App">
        {
            (Object.keys(item).length <= 0) ? 
            <h1>No Item</h1> :
            <div>
                <h1>{item.title}</h1>
                <img src={item.image} alt={item.title}/>
                <h2>${item.price}</h2>
                <p>{item.description}</p>
            </div>  
        }
        
      </div>
    );
}

