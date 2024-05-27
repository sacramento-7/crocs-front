import CollectionSection1 from '@/components/collectionSection1/CollectionSection1';
import DoubleBanners from '@/components/doubleBanners/DoubleBanners';
import MainBanner from '@/components/mainBanner/MainBanner';
import Hero from '@/components/hero/Hero';
import MainHero from '@/components/mainHero/MainHero';
import NewProducts from '@/components/newProducts/NewProducts';
import ProductCard from '@/components/productCard/ProductCard';
import ServiceLabels from '@/components/serviceLabels/ServiceLabels';
import SpecialProducts from '@/components/specialProducts/SpecialProducts';
import TripleBanners from '@/components/tripleBanners/TripleBanners';
import PopularCollection from '@/components/popularCollection/PopularCollection';
import CollectionSectionEnd from '@/components/collectionSectionEnd/CollectionSectionEnd';

export default function Home() {
  return (
    <>
      <MainHero />
      <CollectionSection1 />    
      <NewProducts />
      <MainBanner srcImg='/images/banner/banner1.jpg'/>
      <MainBanner srcImg='/images/banner/banner2.jpg'/>
      <PopularCollection />
      <SpecialProducts />
      <MainBanner srcImg='/images/banner/banner3.jpg'/>
      <MainBanner srcImg='/images/banner/banner4.jpg'/>
      <CollectionSectionEnd />
      {/* <TripleBanners />   
      <DoubleBanners /> */}
      <ServiceLabels />
    </>
  );
}
