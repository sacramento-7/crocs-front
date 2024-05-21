import ContactForm from '@/components/contact/ContactForm'
import ContactInformationCard from '@/components/contact/ContactInformationCard'
import React from 'react'

const ContactPage = () => {
  return (
    <section className="flex h-[100vh] w-full items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Get in Touch</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Have a question or want to work together? Fill out the form below and we will get back to you as soon as
                possible.
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="space-y-4">
            <ContactInformationCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage

//<section className="w-full h-[100vh] py-12 md:py-24 lg:py-32">

//<section className="flex h-[100vh] w-full items-center justify-center">