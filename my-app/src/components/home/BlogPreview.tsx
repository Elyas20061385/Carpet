import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default function BlogPreview() {
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
              From Our Journal
            </p>
            <h2 className="heading-section text-foreground">
              Stories & Insights
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-brand-blue-dark transition-colors group"
          >
            <span className="text-sm uppercase tracking-wider font-medium">
              View All Articles
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
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="uppercase tracking-wider">{post.category}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="font-display text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-3">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
