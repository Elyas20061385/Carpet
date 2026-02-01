import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';
import ProductCard from '@/components/product/ProductCard';

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Curated Selection
            </p>
            <h2 className="heading-section text-foreground">
              Featured Carpets
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center text-primary hover:text-brand-blue-dark transition-colors group"
          >
            <span className="text-sm uppercase tracking-wider font-medium">
              View All Collection
            </span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
