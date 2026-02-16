import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ExternalLink } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { blogPosts, products } from '@/lib/data';
import categoryQazaq from '@/assets/category-qazaq.jpg';

export default function BlogPost() {
  const { slug } = useParams();
  
  // Find the blog post or use first one as fallback
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];
  const relatedProducts = products.slice(0, 3);

  const hotspots = [
    { id: 'h1', x: 30, y: 45, product: relatedProducts[0] },
    { id: 'h2', x: 70, y: 60, product: relatedProducts[1] }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/30" />
        </div>

        <div className="relative z-10 container-luxury h-full min-h-[60vh] flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-surface-cream/70 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-sm uppercase tracking-wider">Back to Journal</span>
            </Link>

            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
              {post.category}
            </p>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-surface-cream font-medium leading-[1.2] mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-surface-cream/60 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-foreground py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-surface-cream/80 text-lg leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <p className="text-surface-cream/70 leading-relaxed mb-8">
                  The art of Afghan carpet weaving is a testament to human creativity and cultural preservation. 
                  For centuries, artisans have passed down their techniques through generations, creating pieces 
                  that are not merely floor coverings but woven narratives of history, tradition, and artistic expression.
                </p>

                {/* Shop-in-Post Image with Hotspots */}
                <div className="relative my-12 rounded-sm overflow-hidden">
                  <img
                    src={categoryQazaq}
                    alt="Featured carpet in interior setting"
                    className="w-full aspect-[16/9] object-cover"
                  />
                  
                  {hotspots.map((hotspot) => (
                    <Link
                      key={hotspot.id}
                      to={`/product/${hotspot.product.slug}`}
                      className="absolute group"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    >
                      <span className="flex h-8 w-8 items-center justify-center">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative rounded-full h-5 w-5 bg-primary border-2 border-surface-cream flex items-center justify-center">
                          <ExternalLink className="w-2.5 h-2.5 text-surface-cream" />
                        </span>
                      </span>
                      
                      <div className="absolute left-10 top-0 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                        <div className="bg-foreground/95 backdrop-blur-md border border-surface-cream/20 rounded-sm px-4 py-3 shadow-xl">
                          <p className="text-surface-cream text-sm font-medium">{hotspot.product.name}</p>
                          <p className="text-primary text-sm font-semibold">${hotspot.product.price.toLocaleString()}</p>
                          <p className="text-surface-cream/50 text-xs mt-1 flex items-center gap-1">
                            Shop Now <ExternalLink className="w-3 h-3" />
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}

                  <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    <p className="text-surface-cream/80 text-xs">Tap hotspots to shop</p>
                  </div>
                </div>

                <h2 className="font-display text-2xl text-surface-cream mb-4">
                  The Weaving Process
                </h2>

                <p className="text-surface-cream/70 leading-relaxed mb-6">
                  Each carpet begins with the careful selection of materials. The finest wool is hand-spun 
                  and dyed using natural pigments derived from plants, minerals, and insects. This painstaking 
                  process ensures that colors remain vibrant for generations, developing a beautiful patina over time.
                </p>

                <p className="text-surface-cream/70 leading-relaxed mb-6">
                  Master weavers work from memory, their fingers dancing across the loom with practiced precision. 
                  A single carpet may contain over one million hand-tied knots, each one placed with intention 
                  and care. This labor of love can take months or even years to complete, depending on the 
                  complexity of the design.
                </p>

                <blockquote className="border-l-2 border-primary pl-6 my-8">
                  <p className="text-surface-cream/80 italic text-xl font-display">
                    "Every knot tells a story. In our carpets, you will find the mountains of our homeland, 
                    the flowers of our gardens, and the dreams of our ancestors."
                  </p>
                  <cite className="text-primary text-sm not-italic">— Master Weaver Abdul Karim</cite>
                </blockquote>

                <h2 className="font-display text-2xl text-surface-cream mb-4">
                  Preserving Tradition
                </h2>

                <p className="text-surface-cream/70 leading-relaxed">
                  In an age of mass production, these handcrafted treasures represent something increasingly rare: 
                  authentic human artistry. Each carpet is unique, bearing the subtle variations that mark it as 
                  a genuine work of art rather than a manufactured commodity. When you bring an Afghan carpet 
                  into your home, you're not just acquiring a beautiful object—you're becoming a custodian of 
                  living heritage.
                </p>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-32 space-y-8">
                {/* Shop the Story */}
                <div className="bg-foreground border border-surface-cream/10 rounded-sm p-6">
                  <h3 className="font-display text-lg text-surface-cream mb-4">
                    Shop the Story
                  </h3>
                  <div className="space-y-4">
                    {relatedProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.slug}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-surface-cream text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {product.name}
                          </h4>
                          <p className="text-primary text-sm font-semibold mt-1">
                            ${product.price.toLocaleString()}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-foreground border border-surface-cream/10 rounded-sm p-6">
                  <h3 className="font-display text-lg text-surface-cream mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <p className="text-primary text-xs uppercase tracking-wider mb-1">
                          {relatedPost.category}
                        </p>
                        <h4 className="text-surface-cream text-sm group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
