import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import heritageCraftsman from '@/assets/heritage-craftsman.jpg';
import categoryQazaq from '@/assets/category-qazaq.jpg';

const timeline = [
  { year: '1990', title: 'Foundation', description: 'Afghan Carpets was established in Kabul with a mission to share Afghan carpet artistry with the world.' },
  { year: '2000', title: 'International Expansion', description: 'Opened our first international showroom in Istanbul, bringing Afghan carpets to a global audience.' },
  { year: '2010', title: 'Dubai Gallery', description: 'Expanded to the Middle East with a flagship gallery in Dubai Design District.' },
  { year: '2020', title: 'Digital Presence', description: 'Launched our e-commerce platform, making authentic Afghan carpets accessible worldwide.' },
  { year: 'Today', title: 'Continuing Legacy', description: 'Serving collectors and design enthusiasts across 40+ countries with museum-quality pieces.' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Our Story
            </p>
            <h1 className="heading-display text-foreground mb-6">
              Three Decades of
              <br />
              <span className="italic">Exceptional Craftsmanship</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over 30 years, we have dedicated ourselves to preserving and sharing
              the extraordinary art of Afghan carpet weaving with the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={heritageCraftsman}
                  alt="Master craftsman weaving carpet"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="heading-section text-foreground mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We believe that every Afghan carpet is more than just a floor covering—it's
                  a work of art that carries centuries of cultural heritage, countless hours
                  of skilled labor, and the soul of the artisan who created it.
                </p>
                <p>
                  Our mission is to connect these exceptional pieces with collectors and
                  design enthusiasts worldwide, while supporting the artisan communities
                  who keep this ancient craft alive.
                </p>
                <p>
                  From the highland wool of Afghan sheep to the natural vegetable dyes
                  extracted from local plants, every element of our carpets reflects our
                  commitment to authenticity and quality.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface-light">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-section text-foreground">Our Journey</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="text-primary font-display text-2xl font-medium">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-medium text-foreground mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="heading-section text-foreground mb-6">
                Afghan Carpet Heritage
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Afghan carpets have been prized for centuries, with weaving traditions
                  dating back over 2,500 years. The diverse ethnic groups of Afghanistan—
                  Turkmen, Uzbek, Hazara, Pashtun, and Baluch—each contribute unique
                  patterns, techniques, and color palettes.
                </p>
                <p>
                  From the bold geometric designs of Qazaq carpets to the intricate
                  floral motifs of Herati pieces, each region's carpets tell stories
                  of nomadic life, religious symbolism, and natural beauty.
                </p>
                <p>
                  Our carpets are handwoven using traditional methods: hand-spun wool
                  from highland sheep, natural vegetable dyes from plants like madder,
                  indigo, and pomegranate, and knot counts that can exceed 400 per
                  square inch.
                </p>
              </div>
              <Link to="/shop" className="btn-luxury mt-8">
                Explore Our Collection
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={categoryQazaq}
                  alt="Traditional Afghan carpet pattern"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
