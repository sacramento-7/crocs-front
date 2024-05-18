import { FaTruck, FaMedal, FaShieldAlt, FaClock } from "react-icons/fa";

const ServiceLabels = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-2">
          <FaTruck className="w-10 h-10 text-primary"/>
          <h3 className="text-lg font-semibold">Free Delivery</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-[240px]">
            Get your order delivered to your doorstep for free.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <FaMedal className="w-10 h-10 text-primary"/>
          <h3 className="text-lg font-semibold">Original Products</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-[240px]">
            We only sell authentic and high-quality products.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <FaShieldAlt className="w-10 h-10 text-primary"/>
          <h3 className="text-lg font-semibold">Money-Back Guarantee</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-[240px]">
            If you're not satisfied, we'll refund your money.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <FaClock className="w-10 h-10 text-primary"/>
          <h3 className="text-lg font-semibold">24/7 Support</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-[240px]">
            Our customer support team is available 24 hours a day.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceLabels