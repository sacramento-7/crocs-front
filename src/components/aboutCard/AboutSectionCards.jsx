import AboutCard from "./AboutCard"


const AboutSectionCards = () => {
    return (
        <section className="grid gap-6 px-4 py-6 md:grid-cols-3 md:gap-8 md:px-6 lg:py-12">
            <div className="overflow-hidden rounded-lg shadow-lg dark:shadow-none">
                <AboutCard />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg dark:shadow-none">
                <AboutCard />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg dark:shadow-none">
                <AboutCard />
            </div>
        </section>
    )
}

export default AboutSectionCards