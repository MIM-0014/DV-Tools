const Cart = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <p className="text-center text-gray-500">Your cart is empty.</p>;
  }

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {cart.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="flex justify-between items-center p-4 bg-base-200 rounded-lg"
        >
          <div>
            <p className="font-bold">{item.icon} {item.name}</p>
            <p>${item.price}</p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="btn btn-error btn-sm"
          >
            Remove
          </button>
        </div>
        ))}

      <div className="text-right font-bold text-xl">
        Total: ${total}
      </div>
<button
  onClick={onCheckout}
  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition duration-300"
>
  Proceed to Checkout
</button>
    </div>
  );
};

export default Cart;