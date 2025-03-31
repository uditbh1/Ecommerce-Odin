// components/Cart.jsx
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    cartTotal
  } = useCart();

  return (
    <div className="bg-opacity-50 z-50 flex justify-center">
      <div className="w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-primary font-semibold'>Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-4 text-center">Your cart is empty</div>
        ) : (
          <div className="divide-y">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 flex">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-20 h-20 object-contain"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 border"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 border"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="p-4 border-t">
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-2 mt-4">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;