import React from 'react'
import NarrowBannerCard from '../bannerCard/NarrowBannerCard'

const DoubleBanners = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
            <NarrowBannerCard />
            <NarrowBannerCard />
        </section>
    )
}

export default DoubleBanners