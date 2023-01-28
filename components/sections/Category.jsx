import React from 'react'
import ServicesCard from '../cards/ServicesCard';
import Heading from '../Heading'
import Parallax from '../wrappers/Parallax';

const SERVICES_ARR = [
  {
    icon: "/assets/services/service-1.png",
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: "/assets/services/service-2.png",
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    icon: "/assets/services/service-3.png",
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    icon: "/assets/services/service-4.png",
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers",
  },
];

const Category = () => {
  return (
    <section className='relative p-4 md:p-0'>
        <Parallax>
        <img src="/assets/glitter.svg" alt="glitter" className='invisible lg:visible absolute top-0 right-4 md:right-12' />

        </Parallax>
        <div className='max-w-6xl xl:max-w-8xl mx-auto'>
            <Heading title={"We offer best services"} subtitle="category" />
        <div className='grid grid-cols-1  gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {SERVICES_ARR.map((service, index) => (
                <ServicesCard key={index} service={service} />
            ))}
        </div>
        </div>
    </section>
  )
}

export default Category
