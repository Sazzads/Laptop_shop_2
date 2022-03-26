import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        const newProduct = cart.find((pro) => pro.id === product.id);
        if (!newProduct) {
            if (cart.length < 4) {
                const newCart = [...cart, product];
                setCart(newCart);
            }
            else {
                alert('you cant add more than 4 items')
            }
        }
        else {
            alert("already added");
        }

    };
    const handleReset = () => {
        setCart([]);
    };
    const handleChoseOne = () => {
        if (cart.length > 0) {
            const random = cart[Math.floor(Math.random() * cart.length)];
            setCart([random]);
        }

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                {/* <Cart cart={cart}></Cart> */}
                {
                    cart.map((item) => (
                        <Item item={item} key={item.id}></Item>
                    )
                    )
                }
                <br />

                <button onClick={handleChoseOne}>Choose One For Me</button>
                <br />
                <br />
                <button onClick={handleReset}>Choose Again </button>
            </div>
        </div>
    );
};

export default Shop;