import Image from "next/image";
import Link from "next/link";

const MainBanner = ({ srcImg, hrefRoute = '#' }) => {
    return (
        <section className="w-full relative overflow-hidden py-6">
            <div className='container'>
                <Link href={hrefRoute}>
                    <Image
                        alt="first banner"
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover object-center"
                        height="500"
                        src={srcImg}
                        style={{
                            aspectRatio: "1200/500",
                            objectFit: "cover",
                        }}
                        width="1200"
                    />
                </Link>
            </div>
        </section>
    )
}

export default MainBanner