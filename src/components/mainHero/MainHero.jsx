import Image from "next/image";
import crocs from '@/assets/images/Crocs1.jpg';

const MainHero = () => {
  return (
    <section className="w-full relative overflow-hidden">
        <Image
        alt="Hero Image"
        className="w-full h-[600px] md:h-[700px] lg:h-[800px] object-cover object-center"
        height="600"
        src={crocs}
        style={{
          aspectRatio: "1920/600",
          objectFit: "cover",
        }}
        width="1920"
      />
    </section>
  )
}

export default MainHero