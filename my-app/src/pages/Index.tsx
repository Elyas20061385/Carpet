import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TrustIndicators from '@/components/home/TrustIndicators';
import HeritageSection from '@/components/home/HeritageSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogPreview from '@/components/home/BlogPreview';

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <TrustIndicators />
      <HeritageSection />
      <TestimonialsSection />
      <BlogPreview />
    </Layout>
  );
}
