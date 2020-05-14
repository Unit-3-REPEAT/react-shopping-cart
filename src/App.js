import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';


function App() {
	const [products] = useState(data);
	// console.log(`products-->`, products)
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};


	const removeItem = (cartItem) => {
		// console.log(`removeItem function TRIGGERED`)
		setCart(cart.filter((item) => {
			// console.log(`ITEM -->`, item);
			if(cartItem.id !== item.id){
				return true;
			} else return false;
			
			
			//This can be written as 
			// return cartItem.id === item.id ? false : true;
		}))
	}

	return (
		<div className="App">	
		<ProductContext.Provider value={{cart, products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>

			<Navigation cart={cart}/>
			{/* Routes */}
			<Route exact path="/">							
					<Products />				
			</Route>



			<Route path="/cart">						
					<ShoppingCart/>				
			</Route>

			</CartContext.Provider>
		</ProductContext.Provider>	
		</div>
	);
}

export default App;
