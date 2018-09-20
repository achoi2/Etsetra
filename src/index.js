import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let intialState = {
    products: [
        { "id": "1", "title": "Kitten Cap", "description": "This kitten cap will keep your mittens warm!", "price": 120, "imageURL": "https://images.unsplash.com/photo-1500174857981-b769ffdc53ce", "categoryId": "1" },
        { "id": "2", "title": "Purrsian Slipper", "description": "Even Sherlock Holmes needed a purr or two.", "price": 50, "imageURL": "https://images.unsplash.com/photo-1467839024528-ac3042ac0ae7", "categoryId": "1" },
        { "id": "3", "title": "Huggable Me", "description": "Wear your cat in style, rain or shine.", "price": 30, "imageURL": "https://images.unsplash.com/photo-1503386435953-66943ba30817", "categoryId": "3" },
        { "id": "4", "title": "Our Clawmark Jeans", "description": "Fool, no man can kill me. But a cat might.", "price": 300, "imageURL": "https://images.unsplash.com/photo-1512218168353-4bba6ac5f543", "categoryId": "2" },
        { "id": "5", "title": "Fluffball", "description": "Help, I can't get out! The fluff is consuming me!", "price": 15, "imageURL": "https://images.unsplash.com/photo-1520697227012-1a7f0fd6c5c1", "categoryId": "1" },
        { "id": "6", "title": "Cheatah", "description": "Look like this cheatah, for a small fee of life imprisonment.", "price": 1500, "imageURL": "https://images.unsplash.com/photo-1497899236524-c79659901d7c", "categoryId": "3" }
    ],
    categories: [
        { "id": "1", "title": "Hats", "slug": "hats" }, 
        { "id": "2", "title": "Pants", "slug": "pants" }, 
        { "id": "3", "title": "Tops", "slug": "tops" }
    ],
    
    cartItems: []
};


let reducer = (oldState, action) => {
    if (action.type === '') {
        return oldState + action.ProductsList;
    } else {
        return oldState;
    }
};

let store = createStore(
    reducer,
    intialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let app = <Provider store={store}>
    <div>
        <Router />
    </div> 
</Provider>


ReactDOM.render(app, document.getElementById('root'));