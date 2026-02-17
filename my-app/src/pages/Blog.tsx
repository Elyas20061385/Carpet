import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Eye, ExternalLink } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { blogPosts } from '@/lib/data';
import categoryQazaq from '@/assets/category-qazaq.jpg';
import categoryWool from '@/assets/category-wool.jpg';
import categorySilk from '@/assets/category-silk.jpg';
import categoryKilim from '@/assets/category-kilim.jpg';
import heroCarpet from '@/assets/hero-carpet.jpg';
import heritageCraftsman from '@/assets/heritage-craftsman.jpg';

const trendArticles = [
  {
    id: 't1',
    title: 'Biophilic Design',
    subtitle: 'Nature-Inspired Interiors',
    image: categoryWool,
    slug: 'biophilic-design-2026'
  },
  {
    id: 't2',
    title: 'Earthy Minimalism',
    subtitle: 'Less is Luxe',
    image: categorySilk,
    slug: 'earthy-minimalism-trend'
  },
  {
    id: 't3',
    title: 'Artisan Revival',
    subtitle: 'Handcrafted Heritage',
    image: categoryKilim,
    slug: 'artisan-revival-movement'
  }
];

const artisanSpotlights = [
  {
    id: 'a1',
    name: 'Master Weaver Farid',
    region: 'Herat Province',
    story: 'Three generations of carpet mastery',
    image: heritageCraftsman,
    videoPlaceholder: true
  },
  {
    id: 'a2',
    name: 'The Women of Mazar',
    region: 'Balkh Province',
    story: 'Preserving ancient Kilim traditions',
    image: categoryQazaq,
    videoPlaceholder: true
  }
];

const hotspotProducts = [
  { id: 'h1', x: 25, y: 40, name: 'Royal Herat Medallion', slug: 'royal-herat-medallion' },
  { id: 'h2', x: 65, y: 55, name: 'Emerald Garden Silk', slug: 'emerald-garden-silk' }
];

export default function Blog() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCarpet}
            alt="Hand-knotted carpet in minimalist interior"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
        </div>

        <div className="relative z-10 container-luxury h-full min-h-[85vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-6">
                The Journal
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-surface-cream font-medium leading-[1.1] mb-6">
                Stories of
                <br />
                <span className="italic text-primary">Heritage & Craft</span>
              </h1>
              <p className="text-surface-cream/70 text-lg max-w-lg mb-8 leading-relaxed">
                Explore the artistry behind every knot. From the mountains of Afghanistan
                to the world's most elegant interiors.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center text-surface-cream hover:text-primary transition-colors group"
              >
                <span className="text-sm uppercase tracking-wider font-medium">
                  Explore Collection
                </span>
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative group">
                <div className="aspect-[4/3] rounded-sm overflow-hidden">
                  <img
                    src={categoryQazaq}
                    alt="Featured carpet story"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Hotspots */}
                {hotspotProducts.map((hotspot) => (
                  <div
                    key={hotspot.id}
                    className="absolute"
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  >
                    <Link
                      to={`/product/${hotspot.slug}`}
                      className="relative block"
                      onMouseEnter={() => setActiveHotspot(hotspot.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                    >
                      <span className="flex h-6 w-6 items-center justify-center">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative rounded-full h-4 w-4 bg-primary border-2 border-surface-cream" />
                      </span>
                      
                      {activeHotspot === hotspot.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute left-8 top-0 whitespace-nowrap z-20"
                        >
                          <div className="bg-foreground/90 backdrop-blur-md border border-surface-cream/20 rounded-sm px-4 py-2">
                            <p className="text-surface-cream text-sm font-medium">{hotspot.name}</p>
                            <p className="text-primary text-xs flex items-center gap-1">
                              Shop Now <ExternalLink className="w-3 h-3" />
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </Link>
                  </div>
                ))}

                {/* Floating Glass Card */}
                <div className="absolute -bottom-8 -left-8 right-12">
                  <div className="bg-foreground/40 backdrop-blur-xl border border-surface-cream/20 rounded-sm p-6 shadow-2xl">
                    <p className="text-surface-cream/60 text-xs uppercase tracking-wider mb-2">Featured Story</p>
                    <h3 className="font-display text-xl text-surface-cream mb-3">
                      The Art of Natural Dyeing
                    </h3>
                    <Link
                      to="/blog/natural-dyeing-art"
                      className="inline-flex items-center text-primary text-sm hover:text-surface-cream transition-colors"
                    >
                      Shop this Story
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Box Grid */}
      <section className="bg-foreground py-24">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Curated Stories
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-surface-cream">
              Explore the Craft
            </h2>
          </motion.div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            
            {/* Large Artisan Spotlight 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-sm"
              onMouseEnter={() => setHoveredCard('artisan-1')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to="/blog/master-weaver-farid" className="block h-full">
                <img
                  src={artisanSpotlights[0].image}
                  alt={artisanSpotlights[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
                
                {/* Video Play Indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-foreground/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Play className="w-3 h-3 text-primary fill-primary" />
                  <span className="text-surface-cream text-xs uppercase tracking-wider">Cinematic</span>
                </div>

                {/* 360 Zoom Icon on Hover */}
                {hoveredCard === 'artisan-1' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-16 h-16 rounded-full bg-surface-cream/20 backdrop-blur-md flex items-center justify-center border border-surface-cream/30">
                      <Eye className="w-6 h-6 text-surface-cream" />
                    </div>
                  </motion.div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">
                    Artisan Spotlight
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-surface-cream mb-2">
                    {artisanSpotlights[0].name}
                  </h3>
                  <p className="text-surface-cream/70 text-sm mb-1">
                    {artisanSpotlights[0].region}
                  </p>
                  <p className="text-surface-cream/50 text-sm">
                    {artisanSpotlights[0].story}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Trend Cards */}
            {trendArticles.slice(0, 2).map((trend, index) => (
              <motion.div
                key={trend.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-sm"
                onMouseEnter={() => setHoveredCard(trend.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to={`/blog/${trend.slug}`} className="block h-full">
                  <img
                    src={trend.image}
                    alt={trend.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
                  
                  {hoveredCard === trend.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-4 right-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-surface-cream/20 backdrop-blur-md flex items-center justify-center border border-surface-cream/30">
                        <Eye className="w-4 h-4 text-surface-cream" />
                      </div>
                    </motion.div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-primary text-xs uppercase tracking-[0.15em] mb-1">
                      2026 Trend
                    </p>
                    <h3 className="font-display text-lg text-surface-cream">
                      {trend.title}
                    </h3>
                    <p className="text-surface-cream/60 text-sm">
                      {trend.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Artisan Spotlight 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 group relative overflow-hidden rounded-sm"
              onMouseEnter={() => setHoveredCard('artisan-2')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to="/blog/women-of-mazar" className="block h-full">
                <img
                  src={artisanSpotlights[1].image}
                  alt={artisanSpotlights[1].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
                
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-foreground/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Play className="w-3 h-3 text-primary fill-primary" />
                  <span className="text-surface-cream text-xs uppercase tracking-wider">Documentary</span>
                </div>

                {hoveredCard === 'artisan-2' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-16 h-16 rounded-full bg-surface-cream/20 backdrop-blur-md flex items-center justify-center border border-surface-cream/30">
                      <Eye className="w-6 h-6 text-surface-cream" />
                    </div>
                  </motion.div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">
                    Artisan Spotlight
                  </p>
                  <h3 className="font-display text-xl text-surface-cream mb-1">
                    {artisanSpotlights[1].name}
                  </h3>
                  <p className="text-surface-cream/60 text-sm">
                    {artisanSpotlights[1].story}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Third Trend Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative overflow-hidden rounded-sm"
              onMouseEnter={() => setHoveredCard(trendArticles[2].id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={`/blog/${trendArticles[2].slug}`} className="block h-full">
                <img
                  src={trendArticles[2].image}
                  alt={trendArticles[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
                
                {hoveredCard === trendArticles[2].id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-surface-cream/20 backdrop-blur-md flex items-center justify-center border border-surface-cream/30">
                      <Eye className="w-4 h-4 text-surface-cream" />
                    </div>
                  </motion.div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-primary text-xs uppercase tracking-[0.15em] mb-1">
                    2026 Trend
                  </p>
                  <h3 className="font-display text-lg text-surface-cream">
                    {trendArticles[2].title}
                  </h3>
                  <p className="text-surface-cream/60 text-sm">
                    {trendArticles[2].subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Newsletter CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-primary/10 border border-primary/30 rounded-sm p-6 flex flex-col justify-center"
            >
              <p className="text-primary text-xs uppercase tracking-[0.2em] mb-3">
                Stay Inspired
              </p>
              <h3 className="font-display text-xl text-surface-cream mb-4">
                Join Our Journal
              </h3>
              <p className="text-surface-cream/60 text-sm mb-4">
                Curated stories delivered weekly.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary text-sm hover:text-surface-cream transition-colors group"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Articles - Traditional Grid */}
      <section className="bg-foreground py-24 border-t border-surface-cream/10">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
                Latest Articles
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-surface-cream">
                From the Journal
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center text-surface-cream hover:text-primary transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider font-medium">
                View Archive
              </span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredCard(`post-${post.id}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {hoveredCard === `post-${post.id}` && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-surface-cream/20 backdrop-blur-md flex items-center justify-center border border-surface-cream/30">
                          <Eye className="w-4 h-4 text-surface-cream" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-surface-cream/50 mb-3">
                    <span className="uppercase tracking-wider text-primary">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-medium text-surface-cream group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-surface-cream/60 leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
