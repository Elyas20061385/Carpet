import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heritageCraftsman from '@/assets/heritage-craftsman.jpg';

export default function HeritageSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={heritageCraftsman}
                alt="Afghan carpet craftsman weaving"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Our Heritage
            </p>
            <h2 className="heading-section text-foreground mb-6">
              A Legacy Woven
              <br />
              <span className="font-display italic">Through Generations</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                For over three decades, we have dedicated ourselves to preserving and
                sharing the extraordinary art of Afghan carpet weaving. Each piece
                in our collection represents not just exceptional craftsmanship, but
                a living tradition passed down through countless generations.
              </p>
              <p>
                Our master weavers work with techniques perfected over centuries,
                using only the finest natural materials and vegetable dyes. The result
                is carpets of unparalleled beauty and durability—heirlooms that will
                grace your home for generations to come.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-primary hover:text-brand-blue-dark transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider font-medium">
                Discover Our Story
              </span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
