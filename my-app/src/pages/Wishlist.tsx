import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';

export default function Wishlist() {
  const { items, removeItem, clearWishlist } = useWishlistStore();
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: typeof items[0]) => {
    addToCart(product);
    removeItem(product.id);
    toast.success('Moved to cart', { description: product.name });
  };

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
              <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
              <h1 className="heading-section text-foreground mb-4">Your Wishlist is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Save your favorite carpets to revisit them later.
              </p>
              <Link to="/shop" className="btn-luxury">
                Browse Collection
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <h1 className="heading-section text-foreground">
              Wishlist ({items.length})
            </h1>
            <button
              onClick={clearWishlist}
              className="text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              Clear All
            </button>
          </motion.div>

          <div className="product-grid">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/product/${item.slug}`} className="block">
                  <div className="relative aspect-carpet overflow-hidden rounded-sm bg-secondary/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeItem(item.id);
                        toast.success('Removed from wishlist');
                      }}
                      className="absolute top-4 right-4 p-2 bg-background/90 rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.category}
                    </p>
                    <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-semibold text-foreground">
                      ${item.price.toLocaleString()}
                    </span>
                  </div>
                </Link>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full mt-4 btn-luxury-outline"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Move to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
