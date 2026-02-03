import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '@/lib/data';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/shop?category=${category.slug}`}
        className="group block relative aspect-[3/4] overflow-hidden rounded-sm"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-2xl font-medium text-surface-cream mb-2">
            {category.name}
          </h3>
          <p className="text-surface-cream/80 text-sm mb-3">
            {category.description}
          </p>
          <span className="inline-block text-xs uppercase tracking-wider text-surface-cream/70 border-b border-surface-cream/50 pb-1 group-hover:border-surface-cream transition-colors">
            {category.productCount} Products
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
