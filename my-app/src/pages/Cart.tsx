import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useCartStore } from '@/store/cartStore';

export default function Cart() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();
  const shippingThreshold = 2000;
  const freeShipping = totalPrice >= shippingThreshold;

  if (items.length === 0) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-luxury text-center max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
              <h1 className="heading-section text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Discover our collection of authentic Afghan carpets.
              </p>
              <Link to="/shop" className="btn-luxury">
                Start Shopping
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-luxury">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-section text-foreground mb-12"
          >
            Shopping Cart
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-6 p-6 bg-surface-light rounded-sm"
                  >
                    <Link to={`/product/${item.slug}`} className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-sm"
                      />
                    </Link>

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            {item.category}
                          </p>
                          <Link
                            to={`/product/${item.slug}`}
                            className="font-display text-lg font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-semibold text-foreground">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-surface-light p-8 rounded-sm sticky top-32"
              >
                <h2 className="font-display text-xl font-medium text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">
                      {freeShipping ? 'Free' : 'Calculated at checkout'}
                    </span>
                  </div>
                  {!freeShipping && (
                    <p className="text-xs text-muted-foreground">
                      Add ${(shippingThreshold - totalPrice).toLocaleString()} more for free shipping
                    </p>
                  )}
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Total</span>
                    <span className="font-semibold text-lg text-foreground">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Link to="/checkout" className="btn-luxury w-full justify-center">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  to="/shop"
                  className="block text-center mt-4 text-sm text-primary hover:underline"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
