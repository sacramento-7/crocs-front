import DoubleBanners from '@/components/doubleBanners/DoubleBanners';
import Hero from '@/components/hero/Hero';
import NewProducts from '@/components/newProducts/NewProducts';
import ProductCard from '@/components/productCard/ProductCard';
import ServiceLabels from '@/components/serviceLabels/ServiceLabels';
import SpecialProducts from '@/components/specialProducts/SpecialProducts';
import TripleBanners from '@/components/tripleBanners/TripleBanners';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceLabels />
      <NewProducts />
      <TripleBanners />
      <SpecialProducts />
      <DoubleBanners />
    </>
  );
}
