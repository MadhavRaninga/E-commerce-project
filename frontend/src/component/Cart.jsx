import { useDispatch, useSelector } from "react-redux";
import {
    getCart,
    removeCartItem,
    //   increaseQuantity,
    //   decreaseQuantity
} from "../Redux/Reducers/cartSlice";
import Navbar from "../component/Navbar";
import { useEffect } from "react";

const Cart = () => {
    const dispatch = useDispatch();

    const {items} = useSelector((state) => state.cart);

    const total = items.reduce(
        (sum, i) =>
            sum +
            (i.product.price -
                (i.product.price * (i.product.discount || 0)) / 100) *
            i.quantity,
        0
    );

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            <Navbar />

            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-semibold mb-10">Shopping Cart</h2>

                {items.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty</p>
                ) : (
                    <div className="space-y-8">
                        {items.map((item) => (
                            <div
                                key={item._id}
                                className="flex gap-6 bg-white p-6 rounded-xl shadow"
                            >
                                <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="w-28 h-28 object-cover rounded"
                                />

                                <div className="flex-1">
                                    <h3 className="font-semibold">{item.product.name}</h3>

                                    <p className="text-gray-600">
                                        ₹ {Math.round(item.product.price - (item.product.price * (item.product.discount || 0)) / 100 )}
                                    </p>

                                    <div className="flex items-center gap-4 mt-4">
                                        <button
                                            //   onClick={() =>
                                            //     dispatch(decreaseQuantity(item.product._id))
                                            //   }
                                            className="px-3 py-1 border"
                                        >
                                            −
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            //   onClick={() =>
                                            //     dispatch(increaseQuantity(item.product._id))
                                            //   }
                                            className="px-3 py-1 border"
                                        >
                                            +
                                        </button>

                                        <button
                                            onClick={() =>
                                                dispatch(removeCartItem(item._id))
                                            }
                                            className="ml-6 text-red-600"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* TOTAL */}
                        <div className="flex justify-between items-center pt-6 border-t">
                            <h3 className="text-xl font-semibold">Total</h3>
                            <h3 className="text-xl font-bold">₹{Math.round(total)}</h3>
                        </div>

                        <button className="w-full bg-black text-white py-4 text-lg hover:bg-gray-900 transition">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Cart;
