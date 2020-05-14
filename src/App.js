import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext';


function App() {
	const [products] = useState(data);
	// console.log(`products-->`, products)
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart({...cart,item})
	};

	return (
		<div className="App">			
			<Navigation cart={cart} />



			{/* Routes */}
			<Route exact path="/">
				{/* <Products products={products} addItem={addItem} /> --THIS WAS PREVIOUS STATE BEFORE CONTEXT*/} 
				<ProductContext.Provider value={{products, addItem}}>
					<Products />{/*CURRENT STATE WITH CONTEXT*/ }
				</ProductContext.Provider>
			</Route>



			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			
		</div>
	);
}

export default App;
