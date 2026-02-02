import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '@/lib/data';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredProducts = query.length > 2
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleProductClick = (slug: string) => {
    onClose();
    setQuery('');
    navigate(`/product/${slug}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.length > 0) {
      onClose();
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-background w-full max-w-3xl mx-auto mt-24 rounded-sm shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit} className="relative">
              <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search carpets, categories..."
                className="w-full h-16 pl-16 pr-14 bg-transparent text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
                autoFocus
              />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </form>

            {filteredProducts.length > 0 && (
              <div className="border-t border-border max-h-96 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.slug)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors text-left"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-sm"
                    />
                    <div>
                      <h4 className="font-medium text-foreground">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <span className="ml-auto font-medium text-primary">
                      ${product.price.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {query.length > 2 && filteredProducts.length === 0 && (
              <div className="border-t border-border p-8 text-center">
                <p className="text-muted-foreground">No products found for "{query}"</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
