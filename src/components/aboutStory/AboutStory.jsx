import React from 'react'

const AboutStory = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Story</h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Acme Inc was founded in 2015 with the goal of revolutionizing the e-commerce industry. Our founders,
                        John, Jane, and Michael, had a shared vision of creating a platform that would deliver exceptional
                        customer experiences through innovative design, cutting-edge technology, and a commitment to
                        sustainability.
                    </p>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-12">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Humble Beginnings</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Acme Inc started as a small online store, operating out of a garage. Our founders worked tirelessly to
                            build the business, focusing on creating high-quality products and delivering exceptional customer
                            service.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Rapid Growth</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            As word of our exceptional products and customer-centric approach spread, Acme Inc experienced rapid
                            growth. We expanded our product line, opened new distribution channels, and invested in cutting-edge
                            technology to enhance the customer experience.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Industry Leadership</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Today, Acme Inc is a leading player in the e-commerce industry, recognized for our innovative
                            solutions, commitment to sustainability, and exceptional customer service. We continue to push the
                            boundaries of what's possible in the world of online retail, always striving to deliver the best
                            possible experience for our customers.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Giving Back</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            At Acme Inc, we believe in the importance of giving back to the community. We actively support local
                            charities and organizations, and have implemented sustainable practices throughout our operations to
                            minimize our environmental impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutStory