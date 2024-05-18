import React from 'react'
import BannerCard from '../bannerCard/BannerCard'

const TripleBanners = () => {
  return (
    <section className="grid gap-4 px-4 py-6 md:grid-cols-3 md:gap-6 md:px-6 lg:py-12"> 
        <BannerCard />
        <BannerCard />
        <BannerCard />
    </section>
  )
}

export default TripleBanners