import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'best-selling', label: 'Best Selling' },
];

const sizeOptions = ['Small (under 4 sqm)', 'Medium (4-8 sqm)', 'Large (over 8 sqm)'];
const materialOptions = ['Wool', 'Silk', 'Wool & Silk'];
const priceRanges = [
  { value: '0-1000', label: 'Under $1,000' },
  { value: '1000-3000', label: '$1,000 - $3,000' },
  { value: '3000-5000', label: '$3,000 - $5,000' },
  { value: '5000-10000', label: '$5,000+' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const activeCategory = searchParams.get('category') || '';
  const activeSort = searchParams.get('sort') || 'newest';
  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory) {
      result = result.filter(
        (p) => p.category.toLowerCase().replace(/\s+/g, '-') === activeCategory ||
               p.category.toLowerCase() === activeCategory
      );
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'best-selling':
        result.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
        break;
      default:
        // newest - keep original order
        break;
    }

    return result;
  }, [activeCategory, activeSort, searchQuery]);

  const handleCategoryChange = (slug: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (slug === activeCategory) {
      newParams.delete('category');
    } else {
      newParams.set('category', slug);
    }
    setSearchParams(newParams);
  };

  const handleSortChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', value);
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-surface-light">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-section text-foreground mb-4">
              {searchQuery ? `Search: "${searchQuery}"` : 'Our Collection'}
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'carpet' : 'carpets'} available
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="flex gap-8 lg:gap-12">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-lg font-medium text-foreground">
                    Filters
                  </h2>
                  {(activeCategory || searchQuery) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                <Accordion type="multiple" defaultValue={['category', 'price']}>
                  <AccordionItem value="category" className="border-border">
                    <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                      Category
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.slug)}
                            className={`block w-full text-left text-sm transition-colors ${
                              activeCategory === cat.slug
                                ? 'text-primary font-medium'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            {cat.name} ({cat.productCount})
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="price" className="border-border">
                    <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                      Price Range
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {priceRanges.map((range) => (
                          <label
                            key={range.value}
                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 border-border rounded text-primary focus:ring-primary"
                            />
                            {range.label}
                          </label>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="size" className="border-border">
                    <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                      Size
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {sizeOptions.map((size) => (
                          <label
                            key={size}
                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 border-border rounded text-primary focus:ring-primary"
                            />
                            {size}
                          </label>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="material" className="border-border">
                    <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                      Material
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {materialOptions.map((material) => (
                          <label
                            key={material}
                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 border-border rounded text-primary focus:ring-primary"
                            />
                            {material}
                          </label>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-sm text-muted-foreground hidden sm:block">Sort by:</span>
                  <div className="relative">
                    <select
                      value={activeSort}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="appearance-none bg-transparent border border-border rounded-sm px-4 py-2 pr-10 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {activeCategory && (
                <div className="flex flex-wrap gap-2 mb-6">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {categories.find((c) => c.slug === activeCategory)?.name || activeCategory}
                    <button onClick={() => handleCategoryChange(activeCategory)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                </div>
              )}

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="product-grid">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">No carpets found.</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={() => setIsSidebarOpen(false)}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 bottom-0 w-80 bg-background p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-medium">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <Accordion type="multiple" defaultValue={['category']}>
              <AccordionItem value="category" className="border-border">
                <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                  Category
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          handleCategoryChange(cat.slug);
                          setIsSidebarOpen(false);
                        }}
                        className={`block w-full text-left text-sm transition-colors ${
                          activeCategory === cat.slug
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}
