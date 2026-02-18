import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Minus, Plus, ChevronRight, Truck, Shield, RotateCcw } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/lib/data';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.slug === slug);
  const addToCart = useCartStore((state) => state.addItem);
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();

  if (!product) {
    return (
      <Layout>
        <div className="section-padding container-luxury text-center">
          <h1 className="heading-section text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-primary hover:underline">
            Return to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Added ${quantity} item(s) to cart`, {
      description: product.name,
    });
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-surface-light py-4">
        <div className="container-luxury">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-carpet overflow-hidden rounded-sm bg-secondary/30 mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 overflow-hidden rounded-sm ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-semibold text-foreground">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="border-t border-b border-border py-6 mb-8">
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Size:</span>
                    <span className="ml-2 text-foreground">{product.size}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material:</span>
                    <span className="ml-2 text-foreground">{product.material}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Weight:</span>
                    <span className="ml-2 text-foreground">{product.weight}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Origin:</span>
                    <span className="ml-2 text-foreground">{product.origin}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Weaving:</span>
                    <span className="ml-2 text-foreground">{product.weavingType}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">SKU:</span>
                    <span className="ml-2 text-foreground">{product.sku}</span>
                  </div>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Quantity:</span>
                  <div className="flex items-center border border-border rounded-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={handleAddToCart} className="btn-luxury flex-1">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleWishlistToggle}
                    className={`p-4 border rounded-sm transition-colors ${
                      inWishlist
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-primary hover:text-primary'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Free worldwide shipping on orders over $2,000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Authenticity certificate included</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <RotateCcw className="w-5 h-5 text-primary" />
                  <span>14-day return policy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-surface-light">
          <div className="container-luxury">
            <h2 className="heading-section text-foreground mb-12">
              You May Also Like
            </h2>
            <div className="product-grid">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
