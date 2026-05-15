import { useEffect, useState } from 'react';
import Steps from './components/Steps';
import Price from './components/Price';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = product => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemove = id => {
    setCart(cart.filter(item => item.id !== id));
    toast.info('Item removed from cart');
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success('Checkout completed!');
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

     <section className="py-12 max-w-7xl mx-auto px-4">

  <div className="flex justify-center gap-4 mb-8">

    {/* Products Button */}
    <button
      onClick={() => setShowCart(false)}
      className={`px-6 py-2 rounded-full font-semibold transition duration-300
        ${
          !showCart
            ? "bg-purple-600 text-white"
            : "border border-purple-600 text-purple-600 hover:bg-purple-50"
        }
      `}
    >
      Products
    </button>

    {/* Cart Button */}
    <button
      onClick={() => setShowCart(true)}
      className={`px-6 py-2 rounded-full font-semibold transition duration-300
        ${
          showCart
            ? "bg-purple-600 text-white"
            : "border border-purple-600 text-purple-600 hover:bg-purple-50"
        }
      `}
    >
      Cart
    </button>

  </div>

  {showCart ? (
    <Cart
      cart={cart}
      onRemove={handleRemove}
      onCheckout={handleCheckout}
    />
  ) : (
    <Products products={products} onAddToCart={handleAddToCart} />
  )}

</section>
      <Steps />
      <Price />
      <Footer />

      <ToastContainer position="top-right" />
           
    </div>
  );
}

export default App;