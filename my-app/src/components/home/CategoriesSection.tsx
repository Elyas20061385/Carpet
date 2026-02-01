import { motion } from 'framer-motion';
import { categories } from '@/lib/data';
import CategoryCard from '@/components/product/CategoryCard';

export default function CategoriesSection() {
  return (
    <section className="section-padding bg-surface-light">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Our Collections
          </p>
          <h2 className="heading-section text-foreground">
            Explore by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
